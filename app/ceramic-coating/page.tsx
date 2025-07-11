"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CeramicCoatingPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/boat-polishing.png"
            alt="Boat Ceramic Coating"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Protect Your Boat with Ceramic Coating
            </h1>
            <p className="text-lg mb-4">
              Our premium ceramic coating services provide a durable,
              hydrophobic layer that repels water, dirt, and UV rays,
              keeping your boat looking its best for longer.
            </p>
            <p className="text-lg mb-4">
              Ceramic coatings offer superior protection compared to traditional
              waxing, lasting for years instead of months. They also enhance
              the boat's shine and make it easier to clean.
            </p>
            <p className="text-lg mb-4">
              We use only the highest quality ceramic coating products and
              our experienced technicians ensure a flawless application.
            </p>
          </div>
          <Button variant="default" className="w-full">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
}