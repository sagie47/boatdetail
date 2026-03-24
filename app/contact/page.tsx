import type { Metadata } from "next";

import Image from "next/image";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import ContactLeadForm from "@/components/features/ContactLeadForm";
import BookingLink from "@/components/tracking/BookingLink";
import CallLink from "@/components/tracking/CallLink";
import ReviewLink from "@/components/tracking/ReviewLink";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Request a quote, call, or book mobile boat detailing anywhere in Kelowna and the Okanagan Valley.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="Contact Kelowna Boat Detailing"
              fill
              className="object-cover brightness-[0.3]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-gold">
                Contact Kelowna Boat Detailing
              </p>
              <h1 className="mt-4 font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                Request A Quote, Call Us, Or Book Online.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light tracking-wide text-white/90">
                Tell us your boat size, service, and location. We&apos;ll follow up
                with pricing and availability, or you can skip straight to a call or
                online booking.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CallLink
                  placement="contact_hero"
                  className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gold/90"
                >
                  Call Or Text {siteConfig.phoneDisplay}
                </CallLink>
                <BookingLink
                  placement="contact_hero"
                  className="inline-flex items-center justify-center rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-black"
                >
                  Book Online
                </BookingLink>
                <ReviewLink
                  placement="contact_hero"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                >
                  Read Google Reviews
                </ReviewLink>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
            <ContactLeadForm />

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="font-playfair text-2xl font-light text-black">
                  Fastest Ways To Reach Us
                </h2>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-medium text-black">Call or text</p>
                      <CallLink
                        placement="contact_sidebar"
                        className="mt-1 inline-block text-gray-700 transition-colors hover:text-gold"
                      >
                        {siteConfig.phoneDisplay}
                      </CallLink>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <a
                        href={siteConfig.emailHref}
                        className="mt-1 inline-block text-gray-700 transition-colors hover:text-gold"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-medium text-black">Service area</p>
                      <p className="mt-1 text-gray-700">{siteConfig.serviceAreaLabel}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock3 className="mt-1 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-medium text-black">Response window</p>
                      <p className="mt-1 text-gray-700">
                        We monitor requests seven days a week and aim to respond
                        within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-black p-6 text-white">
                <h2 className="font-playfair text-2xl font-light text-gold">
                  Need Proof First?
                </h2>
                <p className="mt-3 text-white/80">
                  Check recent feedback before you book. That gives paid traffic a
                  cleaner trust path than forcing a blind jump into the calendar.
                </p>
                <ReviewLink
                  placement="contact_sidebar"
                  className="mt-5 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gold/90"
                >
                  See Google Reviews
                </ReviewLink>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163964.4243849673!2d-119.6154741751436!3d49.88257759576164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c730b3%3A0x4ef8e53ddab4c4f7!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1718744642809!5m2!1sen!2sca"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kelowna service area map"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready To Lock In Your Detail?
            </h2>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <CallLink
                placement="contact_footer"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gold/90"
              >
                Call Or Text Now
              </CallLink>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold bg-transparent text-gold hover:bg-gold hover:text-black"
              >
                <BookingLink placement="contact_footer">Book Online</BookingLink>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
