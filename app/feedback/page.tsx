"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.jpg"
              alt="Feedback for Kelowna Boat Detailing"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                SHARE YOUR <span className="text-gold">FEEDBACK</span>
              </h1>
              <p className="font-light tracking-wide text-white/90 md:text-lg max-w-2xl">
                Help us improve our service by sharing your experience with Kelowna Boat Detailing
              </p>
            </div>
          </div>
        </section>

        {/* Feedback Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-5">
              {/* Feedback Form */}
              <div className="md:col-span-3">
                <h2 className="font-playfair text-3xl font-light mb-8 pb-2 border-b border-gold/20">Submit Your Feedback</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-light text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-light text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service-date" className="block text-sm font-light text-gray-700 mb-1">
                      Service Date
                    </label>
                    <input
                      type="date"
                      id="service-date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-light text-gray-700 mb-1">
                      Service Received
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                    >
                      <option value="" disabled selected>Select the service you received</option>
                      <option value="exterior-wash">Exterior Wash & Dry</option>
                      <option value="interior-clean">Interior Vacuum & Wipe-down</option>
                      <option value="full-detail">Full Detail Package</option>
                      <option value="oxidation">Oxidation Removal & Gelcoat Polish</option>
                      <option value="seasonal">Seasonal Prep Package</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>
                  <div>
                    <p className="block text-sm font-light text-gray-700 mb-3">
                      Overall Satisfaction
                    </p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-8 w-8 cursor-pointer transition-colors ${(hoverRating || rating) >= star ? 'text-gold fill-gold' : 'text-gray-300'}`}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="crew-member" className="block text-sm font-light text-gray-700 mb-1">
                      Crew Member (if known)
                    </label>
                    <input
                      type="text"
                      id="crew-member"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                      placeholder="Name of crew member who performed the service"
                    />
                  </div>
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-light text-gray-700 mb-1">
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                      placeholder="Please share your thoughts about our service. What did you like? What could we improve?"
                    ></textarea>
                  </div>
                  <div>
                    <label className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold/50" 
                      />
                      <span className="text-sm text-gray-600">I consent to having my feedback published as a testimonial (your email will never be published)</span>
                    </label>
                  </div>
                  <div>
                    <Button className="w-full md:w-auto bg-gold text-black hover:bg-gold/90">
                      SUBMIT FEEDBACK
                    </Button>
                  </div>
                </form>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-light mb-4">Why Your Feedback Matters</h3>
                  <p className="text-gray-600 font-light mb-4">
                    At Kelowna Boat Detailing, we're committed to providing the highest quality service. Your feedback helps us:
                  </p>
                  <ul className="space-y-2 text-gray-600 font-light">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-gold" />
                      <span>Recognize outstanding crew members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-gold" />
                      <span>Identify areas for improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-gold" />
                      <span>Enhance our services to better meet your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-1 text-gold" />
                      <span>Train our team members more effectively</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black text-white p-6 rounded-lg">
                  <h3 className="text-xl font-light mb-4 text-gold">Other Ways to Share</h3>
                  <p className="font-light text-white/80 mb-4">
                    We appreciate your feedback on these platforms too:
                  </p>
                  <ul className="space-y-4">
                    <li>
                      <a href="https://g.page/r/CWCCJIC_-vkWEBM/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gold/90 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-black font-medium text-sm">G</span>
                        </div>
                        <span>Google Reviews</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gold/90 transition-colors">
                        <Facebook className="h-5 w-5 text-white" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gold/90 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-black font-medium text-sm">Y</span>
                        </div>
                        <span>Yelp</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action */}
        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready to Experience the Kelowna Difference?
            </h2>
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
              BOOK A DETAIL
            </Button>
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
                <li>
                  <Link href="/#team" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
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
                  <Link href="/#terms" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
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
                    <MapPin className="h-4 w-4" />
                    <span>Kelowna, BC, Canada</span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+17785812947" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+1 (778) 581-2947</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@kelownaboatdetailing.com" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@kelownaboatdetailing.com</span>
                  </Link>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gold transition-colors">
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
              {new Date().getFullYear()} Kelowna Boat Detailing. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/light.png"
                alt="Kelowna Boat Detailing"
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