import { NextResponse } from "next/server";
import { ZodError } from "zod";

import {
  LeadDeliveryConfigError,
  formatCurrency,
  quoteLeadSchema,
  renderLeadTable,
  sendLeadEmail,
} from "@/lib/leads";
import { getServiceBySlug } from "@/lib/serviceCatalog";

export const runtime = "nodejs";

class InvalidQuoteServiceError extends Error {
  constructor() {
    super("Unknown service in quote request.");
    this.name = "InvalidQuoteServiceError";
  }
}

export async function POST(request: Request) {
  try {
    const payload = quoteLeadSchema.parse(await request.json());
    const selectedServices = payload.services.map((slug) => {
      const service = getServiceBySlug(slug);
      if (!service) {
        throw new InvalidQuoteServiceError();
      }

      return service;
    });

    const totals = selectedServices.reduce(
      (accumulator, service) => {
        if (service.perFoot) {
          accumulator.min += service.priceMin * payload.boatLength;
          accumulator.max += service.priceMax * payload.boatLength;
        } else {
          accumulator.min += service.priceMin;
          accumulator.max += service.priceMax;
        }

        return accumulator;
      },
      { min: 0, max: 0 }
    );

    const quoteRange =
      totals.min === totals.max
        ? formatCurrency(totals.min)
        : `${formatCurrency(totals.min)} to ${formatCurrency(totals.max)}`;

    const services = selectedServices.map((service) => service.title).join(", ");

    const text = [
      "New quote request",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Boat length: ${payload.boatLength} ft`,
      `Services: ${services}`,
      `Estimate: ${quoteRange}`,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif; color:#111827; max-width:640px; margin:0 auto;">
        <h1 style="font-size:24px; margin-bottom:16px;">New Quote Request</h1>
        ${renderLeadTable([
          { label: "Name", value: payload.name },
          { label: "Phone", value: payload.phone },
          { label: "Email", value: payload.email },
          { label: "Boat length", value: `${payload.boatLength} ft` },
          { label: "Services", value: services },
          { label: "Estimate", value: quoteRange },
        ])}
      </div>
    `;

    await sendLeadEmail({
      subject: `Quote request from ${payload.name}`,
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
            "Quote requests are not configured yet. Please call or book online while we finish setup.",
        },
        { status: 503 }
      );
    }

    if (error instanceof InvalidQuoteServiceError) {
      return NextResponse.json(
        { ok: false, error: "Please choose valid services for your quote request." },
        { status: 400 }
      );
    }

    if (error instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required quote fields." },
        { status: 400 }
      );
    }

    console.error("Quote lead error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your quote request right now. Please call, text, or book online.",
      },
      { status: 500 }
    );
  }
}
