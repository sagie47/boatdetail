"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const CAD_CURRENCY = "CAD";
const CONVERSION_CALLBACK_TIMEOUT_MS = 500;

function cleanString(value: string) {
  return value.trim();
}

function cleanPhone(value?: string) {
  if (!value) {
    return undefined;
  }

  const stripped = cleanString(value).replace(/[^\d+]/g, "");
  const digits = stripped.startsWith("+")
    ? `+${stripped.slice(1).replace(/\+/g, "")}`
    : stripped.replace(/\+/g, "");

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
    ...payload,
    event,
  });
}

type GoogleAdsUserData = {
  email?: string;
  phone_number?: string;
};

function buildUserData(payload: { email?: string; phone?: string }) {
  const userData: GoogleAdsUserData = {};
  const email = cleanEmail(payload.email);
  const phone = cleanPhone(payload.phone);

  if (email) {
    userData.email = email;
  }

  if (phone) {
    userData.phone_number = phone;
  }

  return Object.keys(userData).length > 0 ? userData : undefined;
}

function trackGoogleAdsConversion({
  sendTo,
  payload,
  userData,
  onComplete,
}: {
  sendTo?: string;
  payload?: Record<string, unknown>;
  userData?: GoogleAdsUserData;
  onComplete?: () => void;
}) {
  if (typeof window === "undefined") {
    onComplete?.();
    return;
  }

  if (!sendTo || typeof window.gtag !== "function") {
    onComplete?.();
    return;
  }

  let hasCompleted = false;
  const complete = () => {
    if (hasCompleted) {
      return;
    }

    hasCompleted = true;
    onComplete?.();
  };

  if (onComplete) {
    window.setTimeout(complete, CONVERSION_CALLBACK_TIMEOUT_MS);
  }

  try {
    if (userData) {
      window.gtag("set", "user_data", userData);
    }
  } catch (error) {
    console.error("Google Ads user_data tracking failed:", error);
  }

  try {
    window.gtag("event", "conversion", {
      send_to: sendTo,
      ...payload,
      ...(onComplete ? { event_callback: complete } : {}),
    });
  } catch (error) {
    console.error("Google Ads conversion tracking failed:", error);
  }
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
  onComplete?: () => void;
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
    onComplete: payload.onComplete,
  });
}

export function trackBookingClickConversion(payload: {
  placement: string;
  destination: string;
  onComplete?: () => void;
}) {
  trackEvent("booking_click", {
    placement: payload.placement,
    destination: payload.destination,
  });

  trackGoogleAdsConversion({
    sendTo: buildSendTo(process.env.NEXT_PUBLIC_GOOGLE_ADS_BOOKING_CLICK_LABEL),
    payload: {
      value: 1,
      currency: CAD_CURRENCY,
    },
    onComplete: payload.onComplete,
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
    userData: buildUserData({
      email: payload.email,
      phone: payload.phone,
    }),
    payload: {
      value: payload.value ?? 1,
      currency: payload.currency ?? CAD_CURRENCY,
    },
  });
}
