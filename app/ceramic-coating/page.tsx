import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat Ceramic Coating",
  description:
    "Protect your boat with durable ceramic coating that adds gloss, UV defense, and easier maintenance for Okanagan boating conditions.",
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
              Our premium ceramic coating services provide a durable, hydrophobic
              layer that repels water, dirt, and UV rays, keeping your boat
              looking its best for longer.
            </p>
            <p className="mb-4 text-lg">
              Ceramic coatings offer superior protection compared to traditional
              waxing, lasting for years instead of months. They also enhance the
              boat&apos;s shine and make it easier to clean.
            </p>
            <p className="mb-4 text-lg">
              We use only high-quality ceramic coating products, and our
              experienced technicians ensure a clean, even application.
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
