'use client';

import { Check } from "lucide-react";

import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OFFERS = [
  {
    title: "SPRING LAUNCH DETAIL",
    range: "From $49-$69/ft",
    detail:
      "Launch-ready full reset for boats coming out of storage or gearing up for opening week.",
    bullets: [
      "Exterior wash, correction, and interior deep clean",
      "Recommended for 18 ft+ launches and event season starts",
      "Includes travel and scheduling priority window",
      "Deposit required to hold premium spring slots",
    ],
    placement: "seasonal_offer_spring_launch",
  },
  {
    title: "OXIDATION RESCUE",
    range: "From $39-$79/ft + prep",
    detail:
      "Targeted oxidation and oxidation-spot rescue for weathered gelcoat and rough paintwork.",
    bullets: [
      "Full visual spot assessment included",
      "Correction plan with prep impact before final price",
      "Recommended for 18 ft+ boats before season cruising",
      "Premium deposit applied for reserved rescue windows",
    ],
    placement: "seasonal_offer_oxidation",
  },
  {
    title: "DOCKSIDE MAINTENANCE PLAN",
    range: "Custom monthly or pull-out schedules",
    detail:
      "Program for owners who want repeat performance, including in-water, dock, or storage support.",
    bullets: [
      "Priority booking for launch, events, and maintenance windows",
      "Mobile service at marina, driveway, or partner pull-out",
      "Works for active owners and travel-heavy vessel schedules",
      "Priority hold deposit applies to premium recurring plans",
    ],
    placement: "seasonal_offer_dockside_plan",
  },
];

export default function SeasonalOffers() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-gold">
            Spring 2026 Launch Focus
          </p>
          <h2 className="font-playfair text-4xl font-light">Seasonal Flagship Offers</h2>
          <p className="mt-4 text-gray-600">
            Push these first. They convert with premium intent and match the current local
            booking window better than broad wash-only traffic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {OFFERS.map((offer) => (
            <Card
              key={offer.title}
              className="border-0 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-black p-6 text-center">
                <h3 className="text-xl font-light tracking-wider text-gold">
                  {offer.title}
                </h3>
                <p className="mt-4 font-playfair text-3xl font-light text-white">
                  {offer.range}
                </p>
              </div>
              <CardContent className="space-y-6 p-6">
                <p className="text-sm font-light leading-relaxed text-gray-700">
                  {offer.detail}
                </p>
                <ul className="space-y-3">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <Check className="mt-1 h-4 w-4 text-gold" />
                      <span className="font-light text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-gold text-black hover:bg-gold/90">
                  <BookingLink placement={offer.placement}>BOOK THIS OFFER</BookingLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-light text-gray-500">
          Deposits secure premium windows and are applied to final job totals.
        </p>
      </div>
    </section>
  );
}
