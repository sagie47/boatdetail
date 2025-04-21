import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
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
          <Link
            href="#services"
            className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors"
          >
            PRICING
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors"
          >
            GALLERY
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#quote" className="hidden md:block">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 font-light tracking-wider px-6 py-2 rounded-lg shadow-lg"
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
  );
}
