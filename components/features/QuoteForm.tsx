"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { serviceCatalog as SERVICES } from "@/lib/serviceCatalog";
import { trackEvent, trackLeadSubmittedConversion } from "@/lib/tracking";

interface QuoteFormProps {
  onQuoteCalculated: (min: number, max: number) => void;
}

interface QuoteFormData {
  boatLength: number;
  services: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

export default function QuoteForm({ onQuoteCalculated }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    boatLength: 0,
    services: [],
    contact: {
      name: "",
      phone: "",
      email: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleServiceChange = useCallback((serviceSlug: string) => {
    setFormData((previous) => ({
      ...previous,
      services: previous.services.includes(serviceSlug)
        ? previous.services.filter((item) => item !== serviceSlug)
        : [...previous.services, serviceSlug],
    }));
  }, []);

  const calculateQuote = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      if (formData.services.length === 0) {
        setSubmitState("error");
        setMessage("Select at least one service to generate an estimate.");
        return;
      }

      if (formData.boatLength <= 0) {
        setSubmitState("error");
        setMessage("Enter your boat length to generate an estimate.");
        return;
      }

      const selectedServices = formData.services
        .map((serviceSlug) => SERVICES.find((entry) => entry.slug === serviceSlug))
        .filter((service): service is (typeof SERVICES)[number] => Boolean(service));

      if (selectedServices.length !== formData.services.length) {
        setSubmitState("error");
        setMessage("Select valid services to generate an estimate.");
        return;
      }

      const totals = selectedServices.reduce(
        (accumulator, service) => {
          if (service.perFoot) {
            accumulator.min += service.priceMin * formData.boatLength;
            accumulator.max += service.priceMax * formData.boatLength;
          } else {
            accumulator.min += service.priceMin;
            accumulator.max += service.priceMax;
          }

          return accumulator;
        },
        { min: 0, max: 0 }
      );
      const serviceTitles = selectedServices.map((service) => service.title);

      onQuoteCalculated(totals.min, totals.max);
      setIsSubmitting(true);
      setSubmitState("idle");
      setMessage("");

      try {
        const response = await fetch("/api/leads/quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.contact.name,
            phone: formData.contact.phone,
            email: formData.contact.email,
            boatLength: formData.boatLength,
            services: formData.services,
          }),
        });

        const result = (await response.json()) as { ok: boolean; error?: string };
        if (!response.ok || !result.ok) {
          throw new Error(
            result.error ||
              "We couldn't send your quote request right now. Please call or book online."
          );
        }

        trackLeadSubmittedConversion("quote", {
          name: formData.contact.name,
          email: formData.contact.email,
          phone: formData.contact.phone,
          value: totals.max,
          eventData: {
            services: serviceTitles.join(", "),
            service_slugs: formData.services.join(", "),
            boat_length: formData.boatLength,
            estimate_min: totals.min,
            estimate_max: totals.max,
          },
        });
        setSubmitState("success");
        setMessage(
          "Your quote request is in. We'll review it and follow up with scheduling details."
        );
      } catch (error) {
        trackEvent("quote_request_failed", {
          service_slugs: formData.services.join(", "),
        });
        setSubmitState("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "We couldn't send your quote request right now. Please call or book online."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, onQuoteCalculated]
  );

  return (
    <div className="space-y-4">
      <form onSubmit={calculateQuote} className="space-y-6 text-white">
        <div className="space-y-1">
          <label
            htmlFor="boatLength"
            className="block text-sm font-light text-white/90"
          >
            Boat Length (ft)
          </label>
          <input
            type="number"
            id="boatLength"
            value={formData.boatLength || ""}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                boatLength: Number(event.target.value),
              }))
            }
            className="w-full rounded-lg border border-gold/20 bg-black/20 px-4 py-2.5 text-white placeholder-gray-400 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            min="1"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="mb-3 block text-sm font-light text-white/90">
            Services
          </label>
          <div className="space-y-4">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="group rounded-lg border border-gold/20 p-6 transition-colors hover:border-gold/40"
              >
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id={service.slug}
                    checked={formData.services.includes(service.slug)}
                    onChange={() => handleServiceChange(service.slug)}
                    className="mt-1 h-4 w-4 rounded border-gray-400 bg-black/30 text-gold focus:ring-gold"
                  />
                  <label htmlFor={service.slug} className="ml-3 flex-1 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-light text-gold">{service.title}</h4>
                      <span className="ml-2 whitespace-nowrap font-light text-white/90">
                        {service.priceLabel}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-light text-white/70">
                      {service.description}
                    </p>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="mb-3 block text-sm font-light text-white/90">
            Contact Information
          </label>
          <div className="space-y-4">
            <div className="rounded-lg border border-gold/20 p-4 transition-colors hover:border-gold/40">
              <label htmlFor="quote-contact-name" className="mb-1 block text-sm font-light text-white/90">
                Your Name
              </label>
              <input
                id="quote-contact-name"
                type="text"
                className="w-full border-0 bg-transparent p-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                value={formData.contact.name}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    contact: {
                      ...previous.contact,
                      name: event.target.value,
                    },
                  }))
                }
                required
              />
            </div>
            <div className="rounded-lg border border-gold/20 p-4 transition-colors hover:border-gold/40">
              <label htmlFor="quote-contact-phone" className="mb-1 block text-sm font-light text-white/90">
                Phone Number
              </label>
              <input
                id="quote-contact-phone"
                type="tel"
                className="w-full border-0 bg-transparent p-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                value={formData.contact.phone}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    contact: {
                      ...previous.contact,
                      phone: event.target.value,
                    },
                  }))
                }
                required
              />
            </div>
            <div className="rounded-lg border border-gold/20 p-4 transition-colors hover:border-gold/40">
              <label htmlFor="quote-contact-email" className="mb-1 block text-sm font-light text-white/90">
                Email Address
              </label>
              <input
                id="quote-contact-email"
                type="email"
                className="w-full border-0 bg-transparent p-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                value={formData.contact.email}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    contact: {
                      ...previous.contact,
                      email: event.target.value,
                    },
                  }))
                }
                required
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full bg-gold py-3 text-base font-light tracking-wider text-black transition-colors hover:bg-gold/90"
        >
          {isSubmitting ? "Sending request..." : "Get Estimate & Send Request"}
        </Button>
        <p className="text-sm font-light text-white/70">
          Premium oxidation, true ceramic, and launch-detail requests may require a deposit
          to confirm scheduling priority.
        </p>

        {message ? (
          <div
            role="alert"
            className={`rounded-lg px-4 py-3 text-sm ${
              submitState === "success"
                ? "bg-green-950/60 text-green-100"
                : "bg-red-950/60 text-red-100"
            }`}
          >
            {message}
          </div>
        ) : null}
      </form>
    </div>
  );
}
