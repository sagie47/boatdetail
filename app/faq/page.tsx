"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";

// Client component for the FAQ accordion
import faqs from "@/data/faq.json";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="font-light text-lg">{faq.question}</span>
            <span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 text-gold" />
              ) : (
                <Plus className="h-5 w-5 text-gold" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 py-4 text-gray-700 font-light">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Server component for the page layout
export default function FAQPage() {
  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col bg-white">
        {/* Navbar provided by RootLayout */}

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <ScrollAnimatedSection animationType="fadeIn">
            <section className="relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/hero-boat.webp"
                  alt="Frequently Asked Questions"
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
                  <p className="font-light tracking-wide text-white/90 md:text-lg max-w-2xl">
                    Find answers to common questions about our boat detailing services
                  </p>
                </div>
              </div>
            </section>
          </ScrollAnimatedSection>

          {/* FAQ Content */}
          <ScrollAnimatedSection animationType="fadeIn">
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="font-playfair text-3xl font-light mb-6">Have Questions? We&apos;ve Got Answers.</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Browse our most frequently asked questions below. If you can&apos;t find what you're looking for, don&apos;t hesitate to
                    <Link href="/contact" className="text-gold hover:underline ml-1">contact us</Link> directly.
                  </p>
                </div>
                
                <FAQ />
                
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

          {/* Call-to-action */}
          <ScrollAnimatedSection animationType="zoomIn">
            <section className="bg-black py-16">
              <div className="container px-4 text-center">
                <h2 className="mb-8 font-playfair text-3xl font-light text-white">
                  Ready for a Professional Boat Detail?
                </h2>
                <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90">
                        BOOK A DETAIL
                      </Button>
                    </a>
              </div>
            </section>
          </ScrollAnimatedSection>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="container px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-light tracking-wider text-lg">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/our-story" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-light tracking-wider text-lg">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-light tracking-wider text-lg">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-light tracking-wider text-lg">GET IN TOUCH</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Kelowna, BC, Canada</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+17785812947"
                    className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+1 (778) 581-2947</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@kelownaboatdetailing.com"
                    className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@kelownaboatdetailing.com</span>
                  </Link>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <Link href="https://www.instagram.com/kelownaboatdetailing/?hl=en" className="text-gray-600 hover:text-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center">
            <p className="text-sm font-light text-gray-500">
              &copy; {new Date().getFullYear()} Kelowna Boat Detailing. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/light.png"
                alt="Kelowna Boat Detailing (Light Logo)"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
        </footer>
      </div>
    </AnimatedPage>
  );
}