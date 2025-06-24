"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      // If we're on the homepage, just scroll
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to homepage with #quote
      router.push('/?section=quote');
    }
  };

  const closeAndNavigate = (href: string, opts?: { scroll?: boolean }) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      if (opts && opts.scroll === false) {
        router.push(href, undefined, { scroll: false });
      } else {
        router.push(href);
      }
    }, 300);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black relative">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
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
        {/* Nav Links */}
        <nav className="hidden md:flex flex-1 justify-evenly">
          <Link href="/" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">HOME</Link>
          <Link href="/our-story" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">ABOUT</Link>
          <Link href="/pricing" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">SERVICES</Link>
          <Link href="/gallery" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">GALLERY</Link>
          <Link href="/faq" className="text-sm font-light tracking-wider text-gold hover:text-gold/80 transition-colors">FAQ</Link>
        </nav>
        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" scroll={false} onClick={handleQuoteClick}>
            <Button size="sm" className="bg-black text-gold border border-gold hover:bg-black/90 font-light tracking-wider">GET A QUOTE</Button>
          </Link>
          <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-gold text-black hover:bg-gold/90">BOOK NOW</Button>
          </a>
        </div>
        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <a href="tel:7785812947" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gold text-black hover:bg-gold/90 h-9 px-3 text-sm">
            BOOK NOW
          </a>
          <Button variant="ghost" size="icon" className="text-gold" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        <div className={`md:hidden fixed inset-0 bg-black z-50 transform transition-transform transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto h-screen' : 'opacity-0 -translate-y-full pointer-events-none'} flex flex-col`}>  
          <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon" className="text-gold" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </div>
          <nav className="flex flex-col flex-grow justify-evenly items-stretch w-full divide-y divide-gold p-4">
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Image src="/images/darknew.png" alt="Kelowna Boat Detailing (Dark Logo)" width={50} height={50} className="h-12 w-auto" />
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Link href="/" onClick={closeAndNavigate('/')} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">HOME</Link>
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Link href="/our-story" onClick={closeAndNavigate('/our-story')} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">ABOUT</Link>
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Link href="/pricing" onClick={closeAndNavigate('/pricing')} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">SERVICES</Link>
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Link href="/gallery" onClick={closeAndNavigate('/gallery')} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">GALLERY</Link>
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Link href="/faq" onClick={closeAndNavigate('/faq')} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">FAQ</Link>
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <Link href="/" scroll={false} onClick={(e) => { e.preventDefault(); setIsOpen(false); setTimeout(() => handleQuoteClick(e), 300); }} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">GET A QUOTE</Link>
            </div>
            <div className="group w-full flex items-center justify-center py-3 transition-shadow hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <a href="tel:7785812947" onClick={() => setIsOpen(false)} className="block w-full text-center text-sm font-light tracking-wider text-gold hover:text-gold/80">BOOK NOW</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
