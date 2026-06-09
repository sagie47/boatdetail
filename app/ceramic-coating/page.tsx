import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat Ceramic Coating in Kelowna",
  description:
    "Protect your boat with true ceramic coating from $75-$110/ft plus prep, built for long-term gloss, UV defense, and easier maintenance in Okanagan conditions.",
  path: "/ceramic-coating",
});

export default function CeramicCoatingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Image
            src="/images/boat-polishing.png"
            alt="Polishing a boat gelcoat finish before ceramic coating in Kelowna"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold">
              Protect Your Boat with Ceramic Coating
            </h1>
            <p className="mb-4 text-lg">
              Our true ceramic coating service starts at $75-$110 per foot plus
              prep and correction. It is built for owners who want long-term
              gloss, stronger UV defense, and easier maintenance between washes.
            </p>
            <p className="mb-4 text-lg">
              Ceramic coatings offer superior protection compared to traditional
              waxing, lasting for years instead of months when applied to a
              properly prepared surface. They also enhance the boat&apos;s shine
              and make cleanup faster after long Okanagan days on the water.
            </p>
            <p className="mb-4 text-lg">
              Prep matters. We quote final ceramic pricing based on gelcoat
              condition, correction needs, and protection goals so the finish
              holds up the way a premium coating should.
            </p>
          </div>
          <Button asChild variant="default" className="w-full">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>

      <section className="mt-16 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-playfair text-3xl font-light text-black">
            Built for UV and water spots
          </h2>
          <p className="mt-4 leading-7 text-gray-700">
            Okanagan boats deal with strong sun, mineral-heavy water spots,
            sunscreen, dock dust, and frequent wipe-downs. A true ceramic coating
            adds a harder sacrificial layer over properly prepared gelcoat or
            painted surfaces so routine washing is faster and gloss lasts longer.
          </p>
        </div>
        <div>
          <h2 className="font-playfair text-3xl font-light text-black">
            Prep decides the result
          </h2>
          <p className="mt-4 leading-7 text-gray-700">
            Ceramic coating should not be installed over oxidation, chalking, or
            embedded staining. We inspect the finish, wash and decontaminate the
            surface, correct the level of oxidation that is practical for the
            boat, then apply protection to a clean, stable finish.
          </p>
        </div>
        <div>
          <h2 className="font-playfair text-3xl font-light text-black">
            When coating makes sense
          </h2>
          <p className="mt-4 leading-7 text-gray-700">
            Coating is best for owners who want premium gloss, easier cleanup,
            and less frequent waxing. For boats that need a lower-cost seasonal
            option, a hybrid ceramic spray sealant can be added after a detail
            for short-term hydrophobic protection.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-lg bg-gray-50 p-8">
        <h2 className="font-playfair text-3xl font-light text-black">
          Ceramic coating quote checklist
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <p className="leading-7 text-gray-700">
            Send the boat length, make or model, storage location, and photos of
            the hull, transom, swim platform, and high-contact areas. Close-up
            photos of oxidation, water spots, and scratches help us estimate prep
            time before scheduling.
          </p>
          <p className="leading-7 text-gray-700">
            We will explain whether the boat is a fit for true ceramic coating,
            whether polishing is required first, and what maintenance routine will
            keep the coating performing through Kelowna and Okanagan boating
            season.
          </p>
        </div>
      </section>
    </div>
  );
}
