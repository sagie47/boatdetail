"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { ExpandableService } from "@/components/ExpandableService";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container px-4">
          <h1 className="mb-4 font-playfair text-4xl font-light">Our Services & Pricing</h1>
          <p className="mb-8 max-w-2xl font-light text-gray-300">
            Professional boat detailing services tailored to your vessel's needs. All prices are based on boat length and condition.
            Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* Expandable Pricing List */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-4xl text-black font-light mb-12 text-center">OUR SERVICES & PRICING</h2>
          <div className="flex flex-col gap-12 xl:gap-16">
            <ExpandableService
              service={{
                image: "/images/boat.png",
                alt: "Exterior Wash & Dry",
                title: "Exterior Wash & Dry",
                description: "Waterline scum removal, microfiber drying to prevent spots",
                price: "$10–$15/ft"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic1.png",
                alt: "Interior Vacuum & Wipe-down",
                title: "Interior Vacuum & Wipe-down",
                description: "Vacuum carpets & seats, wipe surfaces, cupholders, dash, vinyl, clean windows inside and out",
                price: "$10–$12/ft"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic2.png",
                alt: "Full Detail Package",
                title: "Full Detail Package",
                description: "Exterior wash, full interior clean, spot removal, quick wax for a polished finish",
                price: "$20–$25/ft",
                popular: true
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic3.png",
                alt: "Oxidation Removal & Gelcoat Polish",
                title: "Oxidation Removal & Gelcoat Polish",
                description: "One-step compound polish on faded gelcoat, buffer and polishing pads",
                price: "$30–$60/ft"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic1.png",
                alt: "Ceramic Spray Sealant",
                title: "Ceramic Spray Sealant",
                description: "Hydrophobic layer for long-lasting shine and protection, perfect between full details",
                price: "$8–$12/ft"
              }}
              wide
            />
            <ExpandableService
              service={{
                image: "/images/pic2.png",
                alt: "Engine Bay Cleaning",
                title: "Engine Bay Cleaning",
                description: "Degrease, scrub, and rinse engine compartment, improves appearance and protects performance",
                price: "$75–$150 flat"
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
          <Link href="/contact">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
              GET A QUOTE
            </Button>
          </Link>
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
                <li>
                  <Link href="#team" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Careers
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
                  <Link href="#terms" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Terms
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
                  <Link href="#support" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Support center
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
                  <Link href="#" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <span>Kelowna, BC, Canada</span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+12505551234" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <span>+1 (250) 555-1234</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@kelownaboatdetailing.com" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <span>info@kelownaboatdetailing.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default PricingPage;
