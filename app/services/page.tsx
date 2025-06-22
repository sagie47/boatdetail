"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExpandableService } from "@/components/ExpandableService";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-boat.webp"
            alt="Boat Services"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 py-24 md:py-32">
          <div className="grid gap-4">
            <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
              OUR <span className="text-gold">SERVICES</span>
            </h1>
            <p className="mb-8 max-w-2xl font-light text-white/90 md:text-lg">
              Professional boat detailing services tailored to your vessel&apos;s needs.
            </p>
          </div>
        </div>
      </section>

      {/* Expandable Service List */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-4xl text-black font-light mb-12 text-center">OUR SERVICES</h2>
          <div className="flex flex-col gap-12 xl:gap-16">
            <ExpandableService
              service={{
                image: "/images/boat.png",
                alt: "Basic Exterior Wash",
                title: "Basic Exterior Wash",
                description: "Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal (non-polish); quick-dry with microfiber towels; spray wax application (3–6 month protection)"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic1.png",
                alt: "Interior Basic Clean",
                title: "Interior Basic Clean",
                description: "Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light dusting of vents and compartments"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic2.png",
                alt: "Full Exterior & Interior Detail Package",
                title: "Full Exterior & Interior Detail Package",
                description: "Complete oxidation removal and polish; ceramic spray sealant application; full interior deep clean and upholstery conditioning; glass and chrome polishing inside and out",
                popular: true
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic3.png",
                alt: "Oxidation Removal & Gelcoat Polish",
                title: "Oxidation Removal & Gelcoat Polish",
                description: "Single-step polish for light oxidation; multi-step polish for heavy oxidation; acid wash prep if needed; rotary buffer with marine pads; hybrid ceramic spray sealant included"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic1.png",
                alt: "Ceramic Spray Sealant",
                title: "Ceramic Spray Sealant",
                description: "Hydrophobic layer for long-lasting shine and protection, perfect between full details"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic2.png",
                alt: "Interior Deep Clean & Upholstery Care",
                title: "Interior Deep Clean & Upholstery Care",
                description: "Includes Basic Interior Clean services; shampoo carpets and fabric seats; condition and protect vinyl/leather upholstery; deodorize and sanitize interior"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic3.png",
                alt: "Engine Bay Cleaning",
                title: "Engine Bay Cleaning",
                description: "Degrease and scrub engine compartment; low-pressure rinse; plastic/rubber dressing application"
              }}
              wide
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container px-4 text-center">
          <h2 className="mb-8 font-playfair text-3xl font-light">
            Ready to Transform Your Boat?
          </h2>
          <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
              BOOK A DETAIL
            </Button>
          </a>
        </div>
      </section>

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
    </main>
  );
};

export default ServicesPage;