"use client";

import { useState } from "react";

import BookingLink from "@/components/tracking/BookingLink";
import CallLink from "@/components/tracking/CallLink";
import { Button } from "@/components/ui/button";
import { trackEvent, trackLeadSubmittedConversion } from "@/lib/tracking";

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  boatLength: string;
  location: string;
  preferredDate: string;
  notes: string;
};

const INITIAL_STATE: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  service: "General inquiry",
  boatLength: "",
  location: "",
  preferredDate: "",
  notes: "",
};

export default function ContactLeadForm() {
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setMessage("");

    try {
      const normalizedBoatLength = Number(formState.boatLength);

      const response = await fetch("/api/leads/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          boatLength:
            formState.boatLength && normalizedBoatLength > 0
              ? normalizedBoatLength
              : "",
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            "We couldn't send your request right now. Please call or book online."
        );
      }

      trackLeadSubmittedConversion("contact", {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        eventData: {
          service: formState.service,
          has_boat_length: normalizedBoatLength > 0,
        },
      });

      setSubmitState("success");
      setMessage(
        "Your request is in. We'll review the details and get back to you shortly."
      );
      setFormState(INITIAL_STATE);
    } catch (error) {
      trackEvent("contact_request_failed", {
        service: formState.service,
      });
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your request right now. Please call or book online."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-xl md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
          Request A Quote
        </p>
        <h2 className="mt-2 font-playfair text-3xl font-light text-black">
          Tell us about your boat and we&apos;ll follow up fast.
        </h2>
        <p className="mt-3 text-gray-600">
          Share the service, boat size, and location. If you prefer, you can still
          call, text, or book online instead.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formState.name}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={formState.phone}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="778 363 8686"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formState.email}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="contact-service"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Service
            </label>
            <select
              id="contact-service"
              value={formState.service}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  service: event.target.value,
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              <option>General inquiry</option>
              <option>Exterior wash + spray protection</option>
              <option>Interior refresh</option>
              <option>Interior deep clean & upholstery care</option>
              <option>Full detail package</option>
              <option>Oxidation removal & gelcoat polish</option>
              <option>Hybrid ceramic spray sealant</option>
              <option>True ceramic coating</option>
              <option>Maintenance plan</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="contact-boat-length"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Boat length
            </label>
            <input
              id="contact-boat-length"
              type="number"
              min="1"
              value={formState.boatLength}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  boatLength: event.target.value,
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="24"
            />
          </div>
          <div>
            <label
              htmlFor="contact-preferred-date"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Preferred date
            </label>
            <input
              id="contact-preferred-date"
              type="date"
              value={formState.preferredDate}
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  preferredDate: event.target.value,
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-location"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Marina or service location
          </label>
          <input
            id="contact-location"
            type="text"
            value={formState.location}
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                location: event.target.value,
              }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            placeholder="Kelowna Yacht Club, driveway, storage lot, etc."
          />
        </div>

        <div>
          <label
            htmlFor="contact-notes"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            What should we know?
          </label>
          <textarea
            id="contact-notes"
            rows={5}
            value={formState.notes}
            onChange={(event) =>
              setFormState((current) => ({
                ...current,
                notes: event.target.value,
              }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            placeholder="Boat type, oxidation level, interior condition, timeline, or anything else that helps us quote accurately."
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="bg-gold text-black hover:bg-gold/90"
          >
            {isSubmitting ? "Sending request..." : "Send Request"}
          </Button>
          <CallLink
            placement="contact_form_secondary"
            className="inline-flex items-center justify-center rounded-md border border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            Call Or Text Instead
          </CallLink>
          <BookingLink
            placement="contact_form_secondary"
            className="inline-flex items-center justify-center rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-black"
          >
            Book Online
          </BookingLink>
        </div>

        {message ? (
          <div
            role="alert"
            className={`rounded-lg px-4 py-3 text-sm ${
              submitState === "success"
                ? "bg-green-50 text-green-800"
                : submitState === "error"
                  ? "bg-red-50 text-red-800"
                  : "bg-gray-50 text-gray-700"
            }`}
          >
            {message}
          </div>
        ) : null}
      </form>
    </div>
  );
}
