import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Kelowna Boat Detailing to request a quote or book mobile boat detailing anywhere in Kelowna and the Okanagan Valley.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      
   

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="Contact Kelowna Boat Detailing"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                CONTACT <span className="text-gold">US</span>
              </h1>
              <p className="font-light tracking-wide text-white/90 md:text-lg max-w-2xl">
                Ready to transform your boat? Get in touch with our expert detailing team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-light mb-8 pb-2 border-b border-gold/20">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light">Call Us</h3>
                      <p className="mt-1 text-gray-600">
                        <a href={siteConfig.phoneHref} className="hover:text-gold transition-colors">
                          {siteConfig.phoneDisplay}
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Available 7 days a week, 8am-8pm PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light">Email Us</h3>
                      <p className="mt-1 text-gray-600">
                        <a href={siteConfig.emailHref} className="hover:text-gold transition-colors">
                          {siteConfig.email}
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        We aim to respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light">Mobile Service</h3>
                      <p className="mt-1 text-gray-600">
                        {siteConfig.serviceAreaLabel}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Our mobile detailing service comes to you
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-4">Service Area</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163964.4243849673!2d-119.6154741751436!3d49.88257759576164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c730b3%3A0x4ef8e53ddab4c4f7!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1718744642809!5m2!1sen!2sca"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-light mb-4">Service Hours</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Monday - Friday</td>
                      <td className="py-2 text-right">8:00 AM - 8:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Saturday</td>
                      <td className="py-2 text-right">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday</td>
                      <td className="py-2 text-right">10:00 AM - 4:00 PM</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-gray-500">
                  * Service hours may vary during holidays and peak season
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action */}
        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready for the Ultimate Boat Transformation?
            </h2>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
              BOOK A DETAIL
            </Button>
          </a>
          </div>
        </section>
      </main>
    </div>
  );
}
