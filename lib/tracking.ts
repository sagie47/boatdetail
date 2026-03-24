"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const CAD_CURRENCY = "CAD";

function cleanString(value: string) {
  return value.trim();
}

function cleanPhone(value?: string) {
  if (!value) {
    return undefined;
  }

  const digits = value.replace(/[^\d+]/g, "");
  return digits || undefined;
}

function cleanEmail(value?: string) {
  if (!value) {
    return undefined;
  }

  const normalized = cleanString(value).toLowerCase();
  return normalized || undefined;
}

export function trackEvent(
  event: string,
  payload: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
  });
}

function trackGoogleAdsConversion({
  sendTo,
  payload,
}: {
  sendTo?: string;
  payload?: Record<string, unknown>;
}) {
  if (typeof window === "undefined" || !sendTo || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
    ...payload,
  });
}

function buildSendTo(label?: string) {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
  if (!conversionId || !label) {
    return undefined;
  }

  return `${conversionId}/${label}`;
}

export function trackPhoneClickConversion(payload: {
  placement: string;
  phoneNumber?: string;
}) {
  trackEvent("phone_click", {
    placement: payload.placement,
    phone_number: payload.phoneNumber,
  });

  trackGoogleAdsConversion({
    sendTo: buildSendTo(process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CLICK_LABEL),
    payload: {
      phone_number: cleanPhone(payload.phoneNumber),
    },
  });
}

export function trackBookingClickConversion(payload: {
  placement: string;
  destination: string;
}) {
  trackEvent("booking_click", payload);

  trackGoogleAdsConversion({
    sendTo: buildSendTo(process.env.NEXT_PUBLIC_GOOGLE_ADS_BOOKING_CLICK_LABEL),
    payload: {
      value: 1,
      currency: CAD_CURRENCY,
    },
  });
}

export function trackLeadSubmittedConversion(
  type: "quote" | "contact",
  payload: {
    email?: string;
    phone?: string;
    name?: string;
    value?: number;
    currency?: string;
    eventData?: Record<string, unknown>;
  }
) {
  const eventName =
    type === "quote" ? "quote_request_submitted" : "contact_request_submitted";
  const label =
    type === "quote"
      ? process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_SUBMIT_LABEL
      : process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_SUBMIT_LABEL;

  trackEvent(eventName, payload.eventData);

  trackGoogleAdsConversion({
    sendTo: buildSendTo(label),
    payload: {
      value: payload.value ?? 1,
      currency: payload.currency ?? CAD_CURRENCY,
      email_address: cleanEmail(payload.email),
      phone_number: cleanPhone(payload.phone),
      user_data: {
        email_address: cleanEmail(payload.email),
        phone_number: cleanPhone(payload.phone),
        address: payload.name
          ? {
              first_name: cleanString(payload.name).split(/\s+/)[0],
            }
          : undefined,
      },
    },
  });
}
