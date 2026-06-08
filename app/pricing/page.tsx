import type { Metadata } from "next";
import Image from "next/image";

import { ExpandableService } from "@/components/ExpandableService";
import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";
import { buildMetadata } from "@/lib/seo";
import { serviceCatalog } from "@/lib/serviceCatalog";
import SeasonalOffers from "@/components/sections/SeasonalOffers";

export const metadata: Metadata = buildMetadata({
  title: "Boat Detailing Pricing",
  description:
    "See Kelowna mobile boat detailing prices for exterior washes, interior detailing, oxidation removal, gelcoat polishing, ceramic sealants, and full details.",
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
                Transparent mobile boat detailing pricing based on boat length,
                condition, access, and the level of cleaning or protection needed.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      <AnimatedPage>
        <ScrollAnimatedSection animationType="fadeIn" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-14 max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-gold">
                Pricing by length, condition, and finish goals
              </p>
              <p className="mt-5 text-lg leading-8 text-gray-700">
                Boat detailing prices vary because two vessels with the same
                length can need very different work. A maintained surf boat may
                only need a wash, interior reset, and spray protection, while an
                oxidized gelcoat finish may need compounding, polishing, and a
                protection step before it looks right again.
              </p>
              <p className="mt-4 leading-7 text-gray-600">
                Use the ranges below as planning numbers for Kelowna and Okanagan
                mobile service. We confirm the final quote after reviewing boat
                size, current condition, marina or driveway access, water and
                power availability, and whether the job is a one-time reset or a
                recurring maintenance detail.
              </p>
            </div>
            <h2 className="mb-12 text-center font-playfair text-4xl font-light text-black">
            OUR SERVICES &amp; PRICING
          </h2>
            <div className="mb-16">
              <SeasonalOffers />
            </div>
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

        <ScrollAnimatedSection animationType="fadeIn" className="bg-gray-50 py-16">
          <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3">
            <div>
              <h2 className="font-playfair text-3xl font-light text-black">
                What affects price
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                Length, oxidation level, upholstery staining, water spotting,
                storage dust, pet hair, mildew, and access around the boat all
                affect the time needed. Heavy correction and true ceramic coating
                prep are always quoted after reviewing the finish.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl font-light text-black">
                Best seasonal value
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                Many owners book an exterior wash and interior refresh before the
                first major weekend, then add polishing or ceramic protection
                when the boat needs a longer reset. Maintenance details help
                prevent buildup from turning into a larger restoration job.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl font-light text-black">
                Quote details to send
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                For the fastest quote, send boat length, make or style, service
                location, photos of the hull and interior, and the service you are
                considering. We will confirm availability and recommend the right
                package for the condition.
              </p>
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
