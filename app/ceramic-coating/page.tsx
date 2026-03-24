import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat Ceramic Coating",
  description:
    "Protect your boat with true ceramic coating from $75-$110/ft plus prep, built for long-term gloss, UV defense, and easier maintenance in Okanagan conditions.",
  path: "/ceramic-coating",
});

export default function CeramicCoatingPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Image
            src="/images/boat-polishing.png"
            alt="Boat ceramic coating"
            width={600}
            height={400}
            className="rounded-lg"
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
          <Link href="/contact" className="w-full">
            <Button variant="default" className="w-full">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
