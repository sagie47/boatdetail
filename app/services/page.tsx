import type { Metadata } from "next";
import Image from "next/image";

import { ExpandableService } from "@/components/ExpandableService";
import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { serviceCatalog } from "@/lib/serviceCatalog";

export const metadata: Metadata = buildMetadata({
  title: "Boat Detailing Services",
  description:
    "Explore Kelowna Boat Detailing services including exterior washing, interior detailing, oxidation removal, and protective ceramic treatments.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-boat.webp"
            alt="Boat Services"
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
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-playfair text-4xl font-light text-black">
            OUR SERVICES
          </h2>
          <div className="flex flex-col gap-12 xl:gap-16">
            {serviceCatalog.map((service) => (
              <ExpandableService
                key={service.slug}
                service={{
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
      </section>

      <section className="bg-black py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-8 font-playfair text-3xl font-light">
            Ready to Transform Your Boat?
          </h2>
          <BookingLink placement="services_footer_cta">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
              BOOK A DETAIL
            </Button>
          </BookingLink>
        </div>
      </section>
    </main>
  );
}
