'use client';

import { Check } from "lucide-react";

import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceCatalog } from "@/lib/serviceCatalog";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="container px-4">
        <h2 className="mb-6 text-center font-playfair text-3xl font-light">
          OUR SERVICES & PRICING
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          Premium mobile boat detailing built around clean pricing, realistic
          condition-based quotes, and higher-value protection packages.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCatalog.map((service) => (
            <Card
              key={service.slug}
              className={`flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl ${
                service.popular ? "relative" : ""
              }`}
            >
              {service.popular ? (
                <div className="absolute right-0 top-0 bg-gold px-4 py-1 text-xs font-light tracking-wider text-black">
                  POPULAR
                </div>
              ) : null}
              <div className={`${service.popular ? "bg-black" : "bg-gray-50"} p-6 text-center`}>
                <h3
                  className={`text-xl font-light tracking-wider ${
                    service.popular ? "text-gold" : "text-black"
                  }`}
                >
                  {service.title.toUpperCase()}
                </h3>
              </div>
              <CardContent className="flex flex-1 flex-col p-8">
                <div className="mb-6 text-center">
                  <span className="font-playfair text-4xl font-light">
                    {service.priceLabel}
                  </span>
                </div>
                <div className="mb-8 space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-gold text-black hover:bg-gold/90">
                    <BookingLink placement={`pricing_grid_${service.slug}`}>
                      BOOK SERVICE
                    </BookingLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center font-playfair text-2xl font-light">
            ADD-ON SERVICES
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-gold hover:shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-light tracking-wider">
                  METAL POLISHING
                </h4>
                <span className="font-playfair text-xl font-light">$50-$100</span>
              </div>
              <p className="font-light text-gray-600">
                Polish cleats, rails, and trim. Flat rate depends on material and
                coverage.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-gold hover:shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-light tracking-wider">
                  MOLD & MILDEW SPOT CLEANING
                </h4>
                <span className="font-playfair text-xl font-light">$75+</span>
              </div>
              <p className="font-light text-gray-600">
                Targeted treatment for seats, compartments, and storage zones
                with visible mildew buildup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
