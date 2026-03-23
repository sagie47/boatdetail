"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";
import faqs from "@/data/faq.json";
import { siteConfig } from "@/lib/site";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-8 max-w-3xl">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="mb-4 border-b border-gray-200 pb-4">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100"
          >
            <span className="text-lg font-light">{faq.question}</span>
            {openIndex === index ? (
              <Minus className="h-5 w-5 text-gold" />
            ) : (
              <Plus className="h-5 w-5 text-gold" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 py-4 font-light text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col bg-white">
        <main className="flex-1">
          <ScrollAnimatedSection animationType="fadeIn">
            <section className="relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/hero-boat.webp"
                  alt="Frequently asked questions"
                  fill
                  className="object-cover brightness-[0.4]"
                  priority
                />
              </div>
              <div className="container relative z-10 px-4 py-24 md:py-32">
                <div className="grid gap-4">
                  <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                    FREQUENTLY <span className="text-gold">ASKED QUESTIONS</span>
                  </h1>
                  <p className="max-w-2xl font-light tracking-wide text-white/90 md:text-lg">
                    Find answers to common questions about our boat detailing services.
                  </p>
                </div>
              </div>
            </section>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="fadeIn">
            <section className="container mx-auto px-4 py-16">
              <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                  <h2 className="mb-6 font-playfair text-3xl font-light">
                    Have Questions? We&apos;ve Got Answers.
                  </h2>
                  <p className="mx-auto max-w-2xl text-gray-600">
                    Browse our most frequently asked questions below. If you can&apos;t
                    find what you&apos;re looking for, don&apos;t hesitate to
                    <Link href="/contact" className="ml-1 text-gold hover:underline">
                      contact us
                    </Link>{" "}
                    directly.
                  </p>
                </div>

                <FAQAccordion />

                <div className="mt-12 text-center">
                  <p className="mb-4 text-gray-600">Still have questions?</p>
                  <Link href="/contact">
                    <Button className="bg-gold text-black hover:bg-gold/90">
                      CONTACT US
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="zoomIn">
            <section className="bg-black py-16">
              <div className="container px-4 text-center">
                <h2 className="mb-8 font-playfair text-3xl font-light text-white">
                  Ready for a Professional Boat Detail?
                </h2>
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-gold text-black hover:bg-gold/90 sm:w-auto">
                    BOOK A DETAIL
                  </Button>
                </a>
              </div>
            </section>
          </ScrollAnimatedSection>
        </main>
      </div>
    </AnimatedPage>
  );
}
