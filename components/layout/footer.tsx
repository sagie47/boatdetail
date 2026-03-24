import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-light tracking-wider text-lg">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-light tracking-wider text-lg">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/ceramic-coating" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  Ceramic Coating
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-light tracking-wider text-lg">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
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
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.phoneDisplay}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.emailHref}
                  className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{siteConfig.email}</span>
                </Link>
              </li>
              <li>
                <p className="flex items-start gap-2 text-sm font-light text-gray-600">
                  <MapPin className="mt-0.5 h-4 w-4" />
                  <span>{siteConfig.serviceAreaLabel}</span>
                </p>
              </li>
              <li>
                <Link
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-gray-600 hover:text-gold transition-colors"
                >
                  Book online
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Link href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <div className="space-x-4 text-sm font-light text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <Link href="https://okvalleyweb.com/" target="_blank" rel="noopener noreferrer">
            <div className="mt-4 flex flex-col items-center justify-center">
              <p className="text-sm font-light text-gray-500">created by</p>
              <Image
                src="/images/Asset 2.png"
                alt="Web Design Studio Logo"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-auto"
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
