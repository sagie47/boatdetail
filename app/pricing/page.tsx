import type { Metadata } from "next";
import Image from "next/image";

import { ExpandableService } from "@/components/ExpandableService";
import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";
import { buildMetadata } from "@/lib/seo";
import { serviceCatalog } from "@/lib/serviceCatalog";

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
              {serviceCatalog.map((service) => (
                <ExpandableService
                  key={service.slug}
                  service={{
                    slug: service.slug,
                    image: service.image,
                    alt: service.alt,
                    title: service.title,
                    description: service.description,
                    price: service.priceLabel,
                    popular: service.popular,
                  }}
                  wide
                />
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animationType="zoomIn" className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light">
              Ready to Transform Your Boat?
            </h2>
            <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90">
              <BookingLink placement="pricing_page_footer_cta">BOOK A DETAIL</BookingLink>
            </Button>
          </div>
        </ScrollAnimatedSection>
      </AnimatedPage>
    </main>
  );
}
