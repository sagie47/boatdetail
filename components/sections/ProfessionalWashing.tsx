'use client';

import { Check } from "lucide-react";

export default function ProfessionalWashing() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-playfair text-3xl font-light">Professional Washing and Cleaning Boats</h2>
            <p className="mb-4 font-light text-gray-700 leading-relaxed">
              With over a decade of experience, Kelowna Boat Detailing brings showroom shine dockside. From family
              pontoons to high-performance wakeboats — we&apos;ve got you covered.
            </p>
            <p className="mb-6 font-light text-gray-700 leading-relaxed">
              Our services include Exterior Washing, Interior Deep Cleaning, Gelcoat Polishing, Teak Wood
              Restoration, and Ceramic Coating. Choose the best service level for your boat with our premium
              detailing packages.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gold/10 p-1">
                  <Check className="h-4 w-4 text-gold" />
                </div>
                <span className="text-sm font-light">UV and Mold Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-gold/10 p-1">
                  <Check className="h-4 w-4 text-gold" />
                </div>
                <span className="text-sm font-light">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}