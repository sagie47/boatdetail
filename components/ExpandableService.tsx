"use client";

import Image from "next/image";
import { useState } from "react";

import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";

interface ServiceData {
  slug: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  price?: string;
  popular?: boolean;
}

interface ExpandableServiceProps {
  service: ServiceData;
}

export function ExpandableService({
  service,
  wide,
}: ExpandableServiceProps & { wide?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl transition-all duration-300 hover:shadow-gold/30 ${
        open ? "ring-2 ring-gold" : ""
      }`}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      style={{ cursor: "pointer" }}
      onClick={() => setOpen((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          setOpen((value) => !value);
        }
      }}
    >
      <div
        className={`flex flex-col items-stretch transition-all sm:flex-row ${
          wide ? "gap-0" : "gap-8"
        }`}
      >
        <div
          className={`flex flex-shrink-0 items-center justify-center bg-gray-100 transition-all duration-300 ${
            wide ? "h-56 w-full sm:h-auto sm:w-80" : "h-24 w-24"
          }`}
        >
          <Image
            src={service.image}
            alt={service.alt}
            width={wide ? 320 : 96}
            height={wide ? 240 : 96}
            className="h-full w-full rounded-l-2xl object-cover shadow-lg sm:rounded-2xl"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`flex flex-1 flex-col justify-center p-8 sm:p-12 ${
            wide ? "sm:pl-16" : ""
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <h3 className="text-3xl font-playfair font-light text-black">
              {service.title}
              {service.popular ? (
                <span className="ml-4 rounded bg-gold px-4 py-1 align-middle text-sm font-medium text-black">
                  POPULAR
                </span>
              ) : null}
            </h3>
            {service.price ? (
              <span className="text-2xl font-light text-gold sm:ml-auto">
                {service.price}
              </span>
            ) : null}
            <div className="flex select-none items-center text-4xl font-bold text-gold sm:ml-8">
              <span className="inline-block transform transition-transform duration-300 group-hover:scale-125">
                {open ? "-" : "+"}
              </span>
            </div>
          </div>
          {open ? (
            <div className="mt-8 rounded-xl border border-gold/30 bg-gold/10 p-8 shadow-inner">
              <p className="mb-6 text-lg font-light leading-relaxed text-black/80">
                {service.description}
              </p>
              <Button asChild size="sm" className="bg-gold text-black hover:bg-gold/90">
                <BookingLink placement={`service_card_${service.slug}`}>
                  BOOK SERVICE
                </BookingLink>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
