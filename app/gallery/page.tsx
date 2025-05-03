import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/images/pic.jpeg",
      alt: "Exterior Boat Detailing",
      category: "exterior",
      title: "Premium Exterior Detail",
      description: "Complete exterior transformation with our signature wash and wax service",
    },
    {
      src: "/images/pic1.png",
      alt: "Interior Boat Cleaning",
      category: "interior",
      title: "Luxury Interior Clean",
      description: "Deep cleaning and conditioning of all interior surfaces",
    },
    {
      src: "/images/pic2.png",
      alt: "Boat Detailing Process",
      category: "process",
      title: "Professional Detailing",
      description: "Our meticulous detailing process in action",
    },
    {
      src: "/images/pic3.png",
      alt: "Boat Washing",
      category: "exterior",
      title: "Hull Cleaning",
      description: "Specialized hull cleaning and protection",
    },
    {
      src: "/images/boat.png",
      alt: "Seasonal Maintenance",
      category: "maintenance",
      title: "Seasonal Care",
      description: "Comprehensive seasonal maintenance package",
    },
    {
      src: "/images/season.png",
      alt: "Before and After",
      category: "results",
      title: "Stunning Results",
      description: "See the difference our services make",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
            <Link href="/our-story" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">
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
            <Link href="#book">
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
      {/* Header */}
      <header className="relative bg-black py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-boat.jpg"
            alt="Gallery header image"
            fill
            className="object-cover object-center brightness-[0.2]"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-6">
            <ChevronLeft className="h-4 w-4" />
            <span className="text-sm font-light">BACK TO HOME</span>
          </Link>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Our Work Gallery
          </h1>
          <p className="text-white/80 font-light md:text-lg max-w-2xl">
            Explore our portfolio of premium boat detailing services. Each image represents our commitment to excellence
            and attention to detail.
          </p>
        </div>
      </header>

      {/* Gallery Filter */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["All", "Exterior", "Interior", "Process", "Results", "Maintenance"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="bg-black border-gold text-gold hover:bg-black/90 whitespace-nowrap"
              >
                {filter.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg bg-black/20 cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-light text-xl mb-2">{image.title}</h3>
                    <p className="text-white/80 font-light text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-light text-white mb-8">
            Ready to Transform Your Boat?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 min-w-[200px]">
                GET A QUOTE
              </Button>
            </Link>
            <Link href="#book">
              <Button
                size="lg"
                className="bg-black border-gold text-gold hover:bg-black/90 min-w-[200px]"
                variant="outline"
              >
                BOOK NOW
              </Button>
            </Link>
          </div>
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
  </div>
)
}