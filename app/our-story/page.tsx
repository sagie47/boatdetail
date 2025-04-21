import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurStory() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-black">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/darknew.png"
                alt="Kelowna Boat Detailing (Dark Logo)"
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
            <Link href="/gallery" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
              GALLERY
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/#quote" className="hidden md:block">
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
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h2 className="font-playfair text-3xl font-light mb-6 pb-2 border-b border-gold/20">How We Started</h2>
                  <div className="prose text-gray-700 font-light space-y-4">
                    <p>
                      Kelowna Boat Detailing was founded in 2012 by Mike Davidson, a lifelong boater and detailing enthusiast who noticed a gap in the market for high-quality, dedicated boat detailing services in the Okanagan Valley.
                    </p>
                    <p>
                      What began as a one-man operation with a pickup truck full of supplies has grown into Kelowna's premier mobile boat detailing service. Mike's passion for bringing boats back to showroom condition, combined with his commitment to exceptional customer service, quickly earned Kelowna Boat Detailing a reputation for excellence.
                    </p>
                    <p>
                      Today, our professional team serves hundreds of boat owners throughout the Okanagan, from small fishing boats to luxury yachts. As boating enthusiasts ourselves, we understand the pride that comes with a pristine vessel.
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Kelowna Boat Detailing founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Our Mission */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="font-playfair text-3xl font-light mb-6 text-center">Our Mission</h2>
                <p className="text-center text-xl font-light text-gray-700 max-w-2xl mx-auto">
                  "To provide the highest quality boat detailing services while exceeding customer expectations through attention to detail, technical expertise, and exceptional customer service."
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
              
              {/* Meet Our Team */}
              <div>
                <h2 className="font-playfair text-3xl font-light mb-8 pb-2 border-b border-gold/20">Meet Our Team</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Team Member 1 */}
                  <div className="text-center">
                    <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=320&width=240"
                        alt="Mike Davidson - Founder & Lead Detailer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Mike Davidson</h3>
                    <p className="text-gold mb-2">Founder & Lead Detailer</p>
                    <p className="text-gray-600 font-light">
                      With over 15 years of experience in marine detailing, Mike's expertise and passion drive our commitment to excellence.
                    </p>
                  </div>
                  
                  {/* Team Member 2 */}
                  <div className="text-center">
                    <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=320&width=240"
                        alt="Sarah Reynolds - Operations Manager"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Sarah Reynolds</h3>
                    <p className="text-gold mb-2">Operations Manager</p>
                    <p className="text-gray-600 font-light">
                      Sarah ensures our day-to-day operations run smoothly and maintains our high standards of customer service.
                    </p>
                  </div>
                  
                  {/* Team Member 3 */}
                  <div className="text-center">
                    <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=320&width=240"
                        alt="Jason Lee - Senior Detailer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium">Jason Lee</h3>
                    <p className="text-gold mb-2">Senior Detailer</p>
                    <p className="text-gray-600 font-light">
                      A certified marine technician, Jason specializes in gelcoat restoration and premium ceramic coatings.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gray-50 p-12 rounded-lg relative">
                <div className="text-gold text-6xl absolute top-6 left-6 opacity-20">"</div>
                <blockquote className="text-xl font-light text-gray-700 text-center relative z-10 max-w-3xl mx-auto">
                  <p className="mb-6">
                    Starting Kelowna Boat Detailing was about combining my two greatest passions: boating and helping people enjoy their time on the water to the fullest. There's nothing more satisfying than seeing a customer's face light up when they see their boat looking better than the day they bought it.
                  </p>
                  <footer className="font-medium">
                    Mike Davidson, Founder of Kelowna Boat Detailing
                  </footer>
                </blockquote>
                <div className="text-gold text-6xl absolute bottom-6 right-6 opacity-20">"</div>
              </div>
              
              {/* Growth Timeline */}
              <div>
                <h2 className="font-playfair text-3xl font-light mb-8 pb-2 border-b border-gold/20">Our Journey</h2>
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4 text-gold font-playfair text-3xl font-light">2012</div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-medium mb-2">Founded in Kelowna</h3>
                      <p className="text-gray-700 font-light">
                        Mike Davidson started Kelowna Boat Detailing as a one-man operation, focusing on basic cleaning services for local boaters.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4 text-gold font-playfair text-3xl font-light">2015</div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-medium mb-2">Expanded Services</h3>
                      <p className="text-gray-700 font-light">
                        Added specialized services including oxidation removal, gelcoat restoration, and ceramic coating as customer demand grew.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4 text-gold font-playfair text-3xl font-light">2018</div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-medium mb-2">Team Growth</h3>
                      <p className="text-gray-700 font-light">
                        Expanded to a team of five professionals and formed partnerships with several marinas throughout the Okanagan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4 text-gold font-playfair text-3xl font-light">2023</div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-medium mb-2">Kelowna's Premier Boat Detailers</h3>
                      <p className="text-gray-700 font-light">
                        Recognized as the Okanagan's leading boat detailing service, with a growing fleet of mobile detailing units and a reputation for excellence.
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