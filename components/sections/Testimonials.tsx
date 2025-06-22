'use client';

import Image from "next/image";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "The crew is so polite, the work is amazing, and the price is fair. I've been using them for years and my boat always looks brand new.",
    name: "Sarah Peterson",
    boat: "Sea Ray 210 SLX",
    image: "/images/cust1.jpg",
  },
  {
    text: "Simply the best. When all of the other detailers were booked, they made time for me before a big weekend. Exceptional work and customer service.",
    name: "David Jones",
    boat: "Mastercraft X24",
    image: "/images/cust2.jpg",
  },
  {
    text: "I cannot express how impressed I am with the ceramic coating they applied. My gelcoat looks better than it did when I first bought my boat 3 years ago.",
    name: "Anna Wilson",
    boat: "Bayliner Element",
    image: "/images/cust3.jpg",
  },
] as const;

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container px-4">
        <h2 className="mb-12 text-center font-playfair text-3xl font-light">OUR HAPPY CLIENTS</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 flex">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 font-light italic text-gray-700">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm font-light text-gray-500">{testimonial.boat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}