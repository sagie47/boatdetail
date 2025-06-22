"use client";
import Image from "next/image";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ServiceData {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
}

interface ExpandableServiceProps {
  service: ServiceData;
}

export function ExpandableService({ service, wide }: ExpandableServiceProps & { wide?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`transition-all duration-300 bg-white rounded-2xl shadow-2xl border border-black/10 hover:shadow-gold/30 group overflow-hidden w-full ${open ? 'ring-2 ring-gold' : ''}`}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      style={{ cursor: "pointer" }}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(v => !v)}
    >
      <div className={`flex flex-col sm:flex-row items-stretch ${wide ? 'gap-0' : 'gap-8'} transition-all`}>  
        <div className={`flex-shrink-0 flex items-center justify-center bg-gray-100 ${wide ? 'sm:w-80 sm:h-auto w-full h-56' : 'w-24 h-24'} transition-all duration-300`}>
          <Image
            src={service.image}
            alt={service.alt}
            width={wide ? 320 : 96}
            height={wide ? 240 : 96}
            className="rounded-l-2xl sm:rounded-2xl object-cover shadow-lg w-full h-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={`flex flex-col flex-1 justify-center p-8 sm:p-12 ${wide ? 'sm:pl-16' : ''}`}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h3 className="text-3xl font-playfair font-light text-black">
              {service.title}
              {service.popular && (
                <span className="ml-4 px-4 py-1 bg-gold text-black rounded text-sm font-medium align-middle">POPULAR</span>
              )}
            </h3>
            <span className="sm:ml-auto text-2xl font-light text-gold">{service.price}</span>
            <div className="sm:ml-8 text-gold text-4xl font-bold select-none flex items-center">
              <span className="inline-block transition-transform duration-300 transform group-hover:scale-125">
                {open ? "−" : "+"}
              </span>
            </div>
          </div>
          {open && (
            <div className="mt-8 bg-gold/10 rounded-xl p-8 border border-gold/30 shadow-inner">
              <p className="text-black/80 font-light mb-6 text-lg leading-relaxed">{service.description}</p>
              <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
