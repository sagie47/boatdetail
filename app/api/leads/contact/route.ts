import { NextResponse } from "next/server";

import {
  contactLeadSchema,
  LeadDeliveryConfigError,
  renderLeadTable,
  sendLeadEmail,
} from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = contactLeadSchema.parse(await request.json());

    const text = [
      "New contact request",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Service: ${payload.service}`,
      payload.boatLength ? `Boat length: ${payload.boatLength} ft` : "",
      payload.location ? `Marina / location: ${payload.location}` : "",
      payload.preferredDate ? `Preferred date: ${payload.preferredDate}` : "",
      payload.notes ? `Notes: ${payload.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif; color:#111827; max-width:640px; margin:0 auto;">
        <h1 style="font-size:24px; margin-bottom:16px;">New Contact Request</h1>
        ${renderLeadTable([
          { label: "Name", value: payload.name },
          { label: "Phone", value: payload.phone },
          { label: "Email", value: payload.email },
          { label: "Service", value: payload.service },
          {
            label: "Boat length",
            value: payload.boatLength ? `${payload.boatLength} ft` : undefined,
          },
          { label: "Marina / location", value: payload.location },
          { label: "Preferred date", value: payload.preferredDate },
          { label: "Notes", value: payload.notes },
        ])}
      </div>
    `;

    await sendLeadEmail({
      subject: `Contact request from ${payload.name}`,
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
            "Lead delivery is not configured yet. Please call, text, or book online for now.",
        },
        { status: 503 }
      );
    }

    if (error instanceof Error && "issues" in error) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required contact fields." },
        { status: 400 }
      );
    }

    console.error("Contact lead error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your request right now. Please call, text, or book online.",
      },
      { status: 500 }
    );
  }
}
