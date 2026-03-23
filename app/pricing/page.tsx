import type { Metadata } from "next";
import Image from "next/image";

import { ExpandableService } from "@/components/ExpandableService";
import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boat Detailing Pricing",
  description:
    "See pricing for exterior washes, interior detailing, oxidation removal, and full-service mobile boat detailing in Kelowna.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimatedSection animationType="fadeIn">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="Boat Services and Pricing"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                OUR <span className="text-gold">SERVICES</span>
              </h1>
              <p className="mb-8 max-w-2xl font-light text-white/90 md:text-lg">
                Professional boat detailing services tailored to your vessel&apos;s
                needs. All prices are based on boat length and condition.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      <AnimatedPage>
        <ScrollAnimatedSection animationType="fadeIn" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-playfair text-4xl font-light text-black">
              OUR SERVICES &amp; PRICING
            </h2>
            <div className="flex flex-col gap-12 xl:gap-16">
              <ExpandableService
                service={{
                  image: "/images/boat.png",
                  alt: "Basic Exterior Wash",
                  title: "Basic Exterior Wash",
                  description:
                    "Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal (non-polish); quick-dry with microfiber towels; spray wax application (3-6 month protection)",
                  price: "$15-$25/ft",
                }}
                wide
              />
              <ExpandableService
                service={{
                  image: "/images/pic1.png",
                  alt: "Interior Basic Clean",
                  title: "Interior Basic Clean",
                  description:
                    "Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light dusting of vents and compartments",
                  price: "$12-$18/ft",
                }}
                wide
              />
              <ExpandableService
                service={{
                  image: "/images/pic2.png",
                  alt: "Full Exterior and Interior Detail Package",
                  title: "Full Exterior & Interior Detail Package",
                  description:
                    "Complete oxidation removal and polish; ceramic spray sealant application; full interior deep clean and upholstery conditioning; glass and chrome polishing inside and out",
                  price: "$45-$80/ft",
                  popular: true,
                }}
                wide
              />
              <ExpandableService
                service={{
                  image: "/images/pic3.png",
                  alt: "Oxidation Removal and Gelcoat Polish",
                  title: "Oxidation Removal & Gelcoat Polish",
                  description:
                    "Single-step polish for light oxidation ($35-$50/ft); multi-step polish for heavy oxidation ($60-$75/ft); acid wash prep if needed; rotary buffer with marine pads; hybrid ceramic spray sealant included",
                  price: "$35-$75/ft",
                }}
                wide
              />
              <ExpandableService
                service={{
                  image: "/images/pic1.png",
                  alt: "Ceramic Spray Sealant",
                  title: "Ceramic Spray Sealant",
                  description:
                    "Hydrophobic layer for long-lasting shine and protection, perfect between full details",
                  price: "$8-$12/ft",
                }}
                wide
              />
              <ExpandableService
                service={{
                  image: "/images/pic2.png",
                  alt: "Interior Deep Clean and Upholstery Care",
                  title: "Interior Deep Clean & Upholstery Care",
                  description:
                    "Includes Basic Interior Clean services; shampoo carpets and fabric seats; condition and protect vinyl/leather upholstery; deodorize and sanitize interior",
                  price: "$18-$30/ft",
                }}
                wide
              />
              <ExpandableService
                service={{
                  image: "/images/pic3.png",
                  alt: "Engine Bay Cleaning",
                  title: "Engine Bay Cleaning",
                  description:
                    "Degrease and scrub engine compartment; low-pressure rinse; plastic and rubber dressing application",
                  price: "$85-$175 flat",
                }}
                wide
              />
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animationType="zoomIn" className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light">
              Ready to Transform Your Boat?
            </h2>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
                BOOK A DETAIL
              </Button>
            </a>
          </div>
        </ScrollAnimatedSection>
      </AnimatedPage>
    </main>
  );
}
