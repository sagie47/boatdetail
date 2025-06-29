import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurStory() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="The Kelowna Boat Detailing Story"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                OUR <span className="text-gold">STORY</span>
              </h1>
              <p className="font-light tracking-wide text-white/90 md:text-lg max-w-2xl">
                From passionate boaters to premium detailing specialists
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-16">
              {/* Founding Story */}
              <div className="grid gap-8 items-center">
                <div>
                  <h2 className="font-playfair text-3xl font-light mb-6 pb-2 border-b border-gold/20">How We Started</h2>
                  <div className="prose text-gray-700 font-light space-y-4">
                    <p>
                      Established in the spring of 2021, Kelowna Boat Detailing was born from the shared passion of two experienced detailers who wanted to create a customer-focused and high-energy boat cleaning company. We built our business on a foundation of hard work, an expert's attention to detail, and a positive "can-do" attitude. This belief has evolved into the high-quality, client-focused, and efficiency-driven service we offer today, tailored to the specific needs of your boat.
                    </p>
                    <p>
                      As local boaters ourselves, we love being on Okanagan Lake as much as you do. It's the reason we started this company and the motivation behind our hard work. We believe you should be able to go boating whenever you want, without anything hindering that! We offer scheduled routine cleans or single "when you need it" services. Our detailing is honest, upfront, and exactly what you expect. Communication is key, so we always consult with our clients before, during, and after a service to ensure you are always happy with the work we do!
                    </p>
                    <p>
                      Our journey began long before 2021, with both of us honing our craft in the professional detailing industry. This shared history gives us a deep, hands-on understanding of what it takes to make a vessel truly shine. For us, polite, respectful, and positive interactions with customers are the basis of how we do business. We are able to operate because of our clients, and we believe that combining an impeccable job with a great attitude is what truly separates us from our competitors.
                    </p>
                  </div>
                </div>
                {/* Image removed for visual update */}
              </div>

              {/* Our Mission */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="font-playfair text-3xl font-light mb-6 text-center">Our Mission</h2>
                <p className="text-center text-xl font-light text-gray-700 max-w-2xl mx-auto">
                  &quot;To provide the highest quality boat detailing services while exceeding customer expectations through attention to detail, technical expertise, and exceptional customer service.&quot;
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="font-playfair text-3xl font-light mb-8 pb-2 border-b border-gold/20">Our Core Values</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Excellence</h3>
                      <p className="text-gray-700 font-light">
                        We strive for excellence in every detail, ensuring each boat receives meticulous attention and the highest quality care.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Integrity</h3>
                      <p className="text-gray-700 font-light">
                        We operate with complete transparency, honesty, and ethical standards in all our business practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Innovation</h3>
                      <p className="text-gray-700 font-light">
                        We continuously seek the latest products, techniques, and technologies to deliver superior results.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-2">Sustainability</h3>
                      <p className="text-gray-700 font-light">
                        We are committed to using environmentally-friendly products and practices that protect our beautiful Okanagan waterways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-action */}
        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready to Experience the Kelowna Boat Detailing Difference?
            </h2>
            <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
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