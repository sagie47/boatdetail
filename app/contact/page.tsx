import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-black">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Kelowna Boat Detailing"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="hidden text-xl font-light tracking-wider text-gold md:inline-block">
                KELOWNA BOAT DETAILING
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              HOME
            </Link>
            <Link href="/#about" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              ABOUT
            </Link>
            <Link href="/#services" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              SERVICES
            </Link>
            <Link href="/#pricing" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              PRICING
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                className="border-gold text-gold bg-black hover:bg-black/90 hover:text-gold"
              >
                GET A QUOTE
              </Button>
            </Link>
            <Link href="/#book">
              <Button size="sm" className="bg-gold text-black hover:bg-gold/90">
                BOOK NOW
              </Button>
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gold">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.jpg"
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
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-light mb-8 pb-2 border-b border-gold/20">Get a Quote</h2>
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
                  <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                    placeholder="(250) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="boat-info" className="block text-sm font-light text-gray-700 mb-1">
                    Boat Information
                  </label>
                  <input
                    type="text"
                    id="boat-info"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                    placeholder="Make, model and size (e.g., Mastercraft X24, 24ft)"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-light text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="exterior-wash">Exterior Wash & Dry</option>
                    <option value="interior-clean">Interior Vacuum & Wipe-down</option>
                    <option value="full-detail">Full Detail Package</option>
                    <option value="oxidation">Oxidation Removal & Gelcoat Polish</option>
                    <option value="seasonal">Seasonal Prep Package</option>
                    <option value="other">Other (please specify)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50"
                    placeholder="Tell us more about your requirements or ask any questions..."
                  ></textarea>
                </div>
                <div>
                  <Button className="w-full md:w-auto bg-gold text-black hover:bg-gold/90">
                    SUBMIT INQUIRY
                  </Button>
                </div>
              </form>
            </div>

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
                        <a href="tel:+12505551234" className="hover:text-gold transition-colors">
                          +1 (250) 555-1234
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
                        <a href="mailto:info@kelownaboatdetailing.com" className="hover:text-gold transition-colors">
                          info@kelownaboatdetailing.com
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
                        Serving all of Kelowna and the Okanagan Valley
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
                <div className="h-[300px] relative rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163964.4243849673!2d-119.6154741751436!3d49.88257759576164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c730b3%3A0x4ef8e53ddab4c4f7!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1718744642809!5m2!1sen!2sca" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
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
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
              BOOK MY DETAIL
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
                  <Link href="/#support" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
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
                    <MapPin className="h-4 w-4" />
                    <span>Kelowna, BC, Canada</span>
                  </Link>
                </li>
                <li>
                  <Link href="tel:+12505551234" className="flex items-center gap-2 text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+1 (250) 555-1234</span>
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
              © {new Date().getFullYear()} Kelowna Boat Detailing. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/images/logo.png"
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