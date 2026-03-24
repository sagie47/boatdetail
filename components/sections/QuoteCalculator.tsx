"use client";

import { useCallback, useMemo, useState } from "react";

import Image from "next/image";

import QuoteForm from "@/components/features/QuoteForm";
import BookingLink from "@/components/tracking/BookingLink";
import CallLink from "@/components/tracking/CallLink";
import { Button } from "@/components/ui/button";
import { serviceCatalog } from "@/lib/serviceCatalog";

const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

export default function QuoteCalculator() {
  const [showQuote, setShowQuote] = useState(false);
  const [quoteMin, setQuoteMin] = useState(0);
  const [quoteMax, setQuoteMax] = useState(0);

  const handleQuoteCalculated = useCallback((min: number, max: number) => {
    setQuoteMin(min);
    setQuoteMax(max);
    setShowQuote(true);

    setTimeout(() => {
      const element = document.getElementById("quote");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }, []);

  const formattedQuote = useMemo(() => {
    if (quoteMin === quoteMax) {
      return currencyFormatter.format(quoteMin);
    }

    return `${currencyFormatter.format(quoteMin)} - ${currencyFormatter.format(
      quoteMax
    )}`;
  }, [quoteMax, quoteMin]);

  return (
    <section id="quote" className="relative bg-black py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-boat.webp"
          alt="Luxury boat at sunset"
          fill
          className="object-cover brightness-[0.15]"
          sizes="100vw"
          loading="lazy"
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRh4CAABXRUJQVlA4TBECAAAv/8A/EP8QEQAREZEQERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER-A="
        />
      </div>
      <div className="container relative z-10 px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-playfair text-4xl font-light text-gold md:text-5xl">
            Instant Quote Calculator
          </h2>
          <p className="mx-auto max-w-2xl text-white/80 md:text-lg">
            Get an instant estimate, send your request straight to our inbox, and
            choose whether to book online or talk to us first.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 rounded-xl border border-gold/30 bg-black/40 p-8 backdrop-blur-sm">
            <h3 className="mb-6 font-playfair text-2xl font-light text-gold">
              Our Premium Services
            </h3>
            {serviceCatalog.map((service) => (
              <div
                key={service.slug}
                className="rounded-lg border border-gold/20 p-6 transition-colors hover:border-gold/40"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-xl font-light text-gold">{service.title}</h4>
                  <span className="font-light text-white/90">{service.priceLabel}</span>
                </div>
                <p className="text-sm font-light text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-gold/30 bg-black/40 p-8 backdrop-blur-sm">
            <h3 className="mb-6 font-playfair text-2xl font-light text-gold">
              Get Your Quote
            </h3>
            <QuoteForm onQuoteCalculated={handleQuoteCalculated} />

            {showQuote ? (
              <div className="mt-8 rounded-lg bg-black/60 p-6 text-center text-white">
                <h4 className="mb-2 font-playfair text-2xl text-gold">
                  Your Estimated Total
                </h4>
                <p className="mb-2 text-3xl font-light">{formattedQuote}</p>
                <p className="mb-6 text-sm text-white/70">
                  This is an estimate based on boat length and selected services.
                  If your request above submitted successfully, we&apos;ll follow up
                  with scheduling details. If you want to move faster, call, text,
                  or book online now.
                </p>
                <div className="flex flex-col gap-3">
                  <CallLink
                    placement="quote_result"
                    className="inline-flex w-full items-center justify-center rounded-md border border-gold px-4 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-black"
                  >
                    Call Or Text Now
                  </CallLink>
                  <BookingLink placement="quote_result" className="inline-block w-full">
                    <Button
                      size="lg"
                      className="w-full bg-gold text-black hover:bg-gold/90"
                    >
                      Book Online
                    </Button>
                  </BookingLink>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full text-white/70 hover:text-white"
                    onClick={() => setShowQuote(false)}
                  >
                    Close Estimate
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
