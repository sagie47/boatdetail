"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Client component for the FAQ accordion
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What boat detailing services do you offer?",
      answer: "We offer a comprehensive range of boat detailing services including exterior washing and drying, interior cleaning, oxidation removal, gelcoat polishing, metal polishing, teak restoration, ceramic coating, and seasonal maintenance packages. Each service can be customized to your specific vessel's needs."
    },
    {
      question: "How long does a typical boat detail take?",
      answer: "The time required depends on the size of your boat and the services selected. A basic exterior wash for a 20ft boat may take 2-3 hours, while a full detail package could take a full day. For larger vessels or those requiring extensive restoration work, we may schedule multiple days to ensure the job is done to our high standards."
    },
    {
      question: "Do I need to prepare my boat before your arrival?",
      answer: "While no extensive preparation is required, removing personal belongings and clearing clutter from surfaces will help us work more efficiently. For interior detailing, removing loose items helps us clean more thoroughly. If possible, having access to water and electricity is beneficial, though our mobile service comes equipped with our own supplies when needed."
    },
    {
      question: "Do you offer mobile detailing services?",
      answer: "Yes! We are a fully mobile boat detailing service, serving Kelowna and the entire Okanagan Valley. We come to your location, whether your boat is docked at a marina, stored at your home, or at a storage facility. Our mobile setup includes all necessary equipment, water supply, and eco-friendly cleaning solutions."
    },
    {
      question: "What products do you use for detailing?",
      answer: "We use premium, marine-grade products that are specifically designed for boats and are environmentally friendly. Our cleaning agents are biodegradable and safe for use in and around water. For waxing and protection, we use high-grade marine waxes and ceramic coatings that provide lasting protection against UV damage, oxidation, and water spots."
    },
    {
      question: "How often should I have my boat detailed?",
      answer: "For optimal maintenance, we recommend an exterior wash after every 5-10 uses during boating season. A full detail including waxing should be done 1-2 times per year depending on usage and exposure conditions. Boats stored outside may require more frequent detailing than those kept in covered storage."
    },
    {
      question: "Can you remove oxidation from my boat?",
      answer: "Yes, oxidation removal is one of our specialties. Depending on the severity, we use a multi-step compounding and polishing process to remove oxidation and restore your gelcoat's shine. We then apply protection to prevent future oxidation. The process is labor-intensive but can dramatically transform the appearance of your boat."
    },
    {
      question: "Do you offer any guarantees or warranties?",
      answer: "Yes, we stand behind our work. Our services come with a satisfaction guarantee. If you're not completely satisfied with the results, we'll return to address any areas of concern at no additional cost. For specialized services like ceramic coatings, we offer specific warranties detailed in our service agreements."
    },
    {
      question: "How do I book a detailing service?",
      answer: "Booking is easy! You can book online through our website, call us at (250) 555-1234, or email us at info@kelownaboatdetailing.com. We'll discuss your needs, provide a quote, and schedule a convenient appointment time. We recommend booking in advance, especially during peak boating season (May-September) when our schedule fills quickly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, e-transfers, and cash. Payment is typically due upon completion of the service, though larger jobs may require a deposit at the time of booking. We provide detailed invoices for all services performed."
    }
  ];

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
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar provided by RootLayout */}

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.jpg"
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

        {/* FAQ Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-light mb-6">Have Questions? We've Got Answers.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our most frequently asked questions below. If you can't find what you're looking for, don't hesitate to
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

        {/* Call-to-action */}
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
                    href="tel:+12505551234"
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
  );
} 