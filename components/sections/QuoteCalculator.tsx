"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/features/QuoteForm";

export default function QuoteCalculator() {
  const [showQuote, setShowQuote] = useState(false);
  const [quoteMin, setQuoteMin] = useState(0);
  const [quoteMax, setQuoteMax] = useState(0);

  const handleQuoteCalculated = useCallback((min: number, max: number) => {
    setQuoteMin(min);
    setQuoteMax(max);
    setShowQuote(true);
    
    // Scroll to quote after state update
    setTimeout(() => {
      const el = document.getElementById('quote');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, []);

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
          blurDataURL="data:image/webp;base64,UklGRh4CAABXRUJQVlA4TBECAAAv/8A/EP8QEQAREZEQERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER-A="
        />
      </div>
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-gold font-light mb-4">
            Instant Quote Calculator
          </h2>
          <p className="text-white/80 md:text-lg font-light max-w-2xl mx-auto">
            Get an instant estimate for your boat detailing needs. Select your services and preferences below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services Price List */}
          <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-xl p-8 space-y-6">
            <h3 className="font-playfair text-2xl text-gold font-light mb-6">Our Premium Services</h3>
            {/* Basic Exterior Wash */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Basic Exterior Wash</h4>
                <span className="text-white/90 font-light">$15–$25/ft</span>
              </div>
              <p className="text-white/70 text-sm font-light">Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal (non-polish); quick-dry with microfiber towels; spray wax application (3–6 month protection)</p>
            </div>
            {/* Interior Basic Clean */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Interior Basic Clean</h4>
                <span className="text-white/90 font-light">$12–$18/ft</span>
              </div>
              <p className="text-white/70 text-sm font-light">Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light dusting of vents and compartments</p>
            </div>
            {/* Full Exterior & Interior Detail Package */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Full Exterior & Interior Detail Package</h4>
                <span className="text-white/90 font-light">$45–$80/ft</span>
              </div>
              <p className="text-white/70 text-sm font-light">Complete oxidation removal and polish; ceramic spray sealant application; full interior deep clean and upholstery conditioning; glass and chrome polishing inside and out</p>
            </div>
            {/* Oxidation Removal & Gelcoat Polish */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Oxidation Removal & Gelcoat Polish</h4>
                <span className="text-white/90 font-light">$35–$75/ft</span>
              </div>
              <p className="text-white/70 text-sm font-light">Single-step polish for light oxidation ($35–$50/ft); multi-step polish for heavy oxidation ($60–$75/ft); acid wash prep if needed; rotary buffer with marine pads; hybrid ceramic spray sealant included</p>
            </div>
            {/* Ceramic Spray Sealant */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Ceramic Spray Sealant</h4>
                <span className="text-white/90 font-light">$8–$12/ft</span>
              </div>
              <p className="text-white/70 text-sm font-light">Hydrophobic layer for long-lasting shine and protection, perfect between full details</p>
            </div>
            {/* Interior Deep Clean & Upholstery Care */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Interior Deep Clean & Upholstery Care</h4>
                <span className="text-white/90 font-light">$18–$30/ft</span>
              </div>
              <p className="text-white/70 text-sm font-light">Includes Basic Interior Clean services; shampoo carpets and fabric seats; condition and protect vinyl/leather upholstery; deodorize and sanitize interior</p>
            </div>
            {/* Engine Bay Cleaning */}
            <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-gold text-xl font-light">Engine Bay Cleaning</h4>
                <span className="text-white/90 font-light">$85–$175 flat</span>
              </div>
              <p className="text-white/70 text-sm font-light">Degrease and scrub engine compartment; low-pressure rinse; plastic/rubber dressing application</p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-xl p-8">
            <h3 className="font-playfair text-2xl text-gold font-light mb-6">Get Your Quote</h3>
            <QuoteForm onQuoteCalculated={handleQuoteCalculated} />
            
            {/* Quote Result */}
            {showQuote && (
              <div className="mt-8 rounded-lg bg-black/60 p-6 text-center text-white">
                <h4 className="mb-2 font-playfair text-2xl text-gold">Your Estimated Total</h4>
                <p className="text-3xl font-light mb-2">
                  {quoteMin === quoteMax ? `$${quoteMin}` : `$${quoteMin} – $${quoteMax}`}
                </p>
                <p className="text-white/70 text-sm mb-4">This is an estimate. We will contact you to confirm your booking and final price.</p>
                <a 
                  href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gold text-black hover:bg-gold/90"
                  >
                    GET A QUOTE
                  </Button>
                </a>
                <Button
                  variant="ghost"
                  size="lg"
                  className="mt-4 w-full text-white/70 hover:text-white"
                  onClick={() => setShowQuote(false)}
                >
                  CLOSE
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}