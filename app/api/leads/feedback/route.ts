import { NextResponse } from "next/server";

import {
  feedbackLeadSchema,
  LeadDeliveryConfigError,
  renderLeadTable,
  sendLeadEmail,
} from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = feedbackLeadSchema.parse(await request.json());

    const fullName = `${payload.firstName} ${payload.lastName}`.trim();

    const text = [
      "New customer feedback",
      "",
      `Name: ${fullName}`,
      `Email: ${payload.email}`,
      `Rating: ${payload.rating}/5`,
      payload.serviceDate ? `Service date: ${payload.serviceDate}` : "",
      payload.service ? `Service: ${payload.service}` : "",
      payload.crewMember ? `Crew member: ${payload.crewMember}` : "",
      `Publish consent: ${payload.publishConsent ? "Yes" : "No"}`,
      "",
      payload.feedback,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif; color:#111827; max-width:640px; margin:0 auto;">
        <h1 style="font-size:24px; margin-bottom:16px;">New Customer Feedback</h1>
        ${renderLeadTable([
          { label: "Name", value: fullName },
          { label: "Email", value: payload.email },
          { label: "Rating", value: `${payload.rating}/5` },
          { label: "Service date", value: payload.serviceDate },
          { label: "Service", value: payload.service },
          { label: "Crew member", value: payload.crewMember },
          {
            label: "Publish consent",
            value: payload.publishConsent ? "Yes" : "No",
          },
          { label: "Feedback", value: payload.feedback },
        ])}
      </div>
    `;

    await sendLeadEmail({
      subject: `Feedback from ${fullName}`,
      replyTo: payload.email,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof LeadDeliveryConfigError) {
      console.error(error.message);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Feedback email delivery is not configured yet. Please use the Google Reviews link for now.",
        },
        { status: 503 }
      );
    }

    if (error instanceof Error && "issues" in error) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required feedback fields." },
        { status: 400 }
      );
    }

    console.error("Feedback lead error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't submit your feedback right now. Please try Google Reviews instead.",
      },
      { status: 500 }
    );
  }
}
