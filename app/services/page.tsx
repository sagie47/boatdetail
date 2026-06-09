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
    "Explore mobile boat detailing services in Kelowna including exterior washing, interior detailing, oxidation removal, gelcoat polishing, and ceramic protection.",
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
              Mobile marine detailing for Kelowna, West Kelowna, Lake Country,
              Peachland, Vernon, Penticton, and nearby Okanagan marinas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-gold">
              Dockside detailing built for Okanagan boats
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Kelowna Boat Detailing handles the jobs that keep boats guest-ready
              through launch season, summer weekends, and fall storage. We bring
              marine-safe wash products, polish systems, upholstery care, and
              protection options to homes, storage lots, and local marinas so you
              do not have to tow the boat across town for a clean finish.
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              Every service starts with the condition of the vessel: water spots,
              dock rash, sunscreen buildup, vinyl staining, oxidation, gelcoat
              fade, and the way the boat is used on Okanagan Lake. From a quick
              exterior wash to multi-step correction, the goal is to choose the
              right level of cleaning and protection without overselling work the
              boat does not need.
            </p>
          </div>
          <h2 className="mb-12 text-center font-playfair text-4xl font-light text-black">
            OUR SERVICES
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
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3">
          <div>
            <h2 className="font-playfair text-3xl font-light text-black">
              Mobile service area
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              We serve Kelowna, West Kelowna, Lake Country, Peachland, Vernon,
              Penticton, and surrounding Okanagan boating communities. Most work
              can be completed at a driveway, storage lot, marina, or slip when
              water and access are available.
            </p>
          </div>
          <div>
            <h2 className="font-playfair text-3xl font-light text-black">
              Marine-safe process
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              Exterior work uses boat-appropriate shampoos, microfiber drying,
              gelcoat polishing methods, and protection products selected for UV,
              mineral deposits, and freshwater use. Interior work focuses on
              vinyl, upholstery, carpets, glass, compartments, and odor control.
            </p>
          </div>
          <div>
            <h2 className="font-playfair text-3xl font-light text-black">
              Clear recommendations
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              If oxidation, staining, or coating prep will change the price, we
              explain it before work begins. Owners get a practical plan for the
              current condition of the boat and the maintenance schedule that
              makes sense for the season.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-8 font-playfair text-3xl font-light">
            Ready to Transform Your Boat?
          </h2>
          <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90">
            <BookingLink placement="services_footer_cta">BOOK A DETAIL</BookingLink>
          </Button>
        </div>
      </section>
    </main>
  );
}
