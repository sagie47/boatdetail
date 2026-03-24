'use client';

import BookingLink from "@/components/tracking/BookingLink";
import CallLink from "@/components/tracking/CallLink";
import ReviewLink from "@/components/tracking/ReviewLink";
import { siteConfig } from "@/lib/site";

export default function Stats() {
  return (
    <section className="bg-black py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-gold/30 bg-black p-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Call Or Text
            </p>
            <CallLink
              placement="home_trust_strip"
              className="mt-4 block font-playfair text-3xl font-light text-white transition-colors hover:text-gold"
            >
              {siteConfig.phoneDisplay}
            </CallLink>
            <p className="mt-3 text-sm font-light tracking-wide text-white/70">
              Best for fast scheduling questions or urgent pre-weekend cleanups.
            </p>
          </div>

          <div className="rounded-lg border border-gold/30 bg-black p-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Mobile Service
            </p>
            <p className="mt-4 font-playfair text-3xl font-light text-white">
              Kelowna + Okanagan
            </p>
            <p className="mt-3 text-sm font-light tracking-wide text-white/70">
              We come to marinas, driveways, and storage lots across your local
              boating season.
            </p>
          </div>

          <div className="rounded-lg border border-gold/30 bg-black p-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Before You Book
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <ReviewLink
                placement="home_trust_strip"
                className="font-playfair text-3xl font-light text-white transition-colors hover:text-gold"
              >
                Read Google Reviews
              </ReviewLink>
              <BookingLink
                placement="home_trust_strip"
                className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-gold"
              >
                Or skip ahead and book online
              </BookingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
