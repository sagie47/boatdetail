'use client';

import Image from "next/image";

const SERVICE_HIGHLIGHTS = [
  {
    title: "EXTERIOR WASH & DRY",
    image: "/images/pic.jpeg",
    color: "bg-gold",
  },
  {
    title: "INTERIOR CLEANING",
    image: "/images/pic1.png",
    color: "bg-gold",
  },
  {
    title: "OXIDATION REMOVAL",
    image: "/images/pic3.png",
    color: "bg-gold",
    href: "/ceramic-coating",
  },
  {
    title: "INTERIOR AND EXTERIOR CLEANING",
    image: "/images/boat.png",
    color: "bg-gold",
  },
] as const;

export default function ServiceHighlights() {
  return (
    <section id="services" className="bg-white py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_HIGHLIGHTS.map((service, i) => (
            <a key={i} href="#quote" className="group relative overflow-hidden rounded-lg">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={400}
                height={300}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 w-full p-4">
                <div
                  className={`mb-2 w-fit ${service.color} px-2 py-1 text-xs font-light tracking-wider text-black`}
                >
                  GET A QUOTE
                </div>
                <h3 className="font-light tracking-wider text-white">{service.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}