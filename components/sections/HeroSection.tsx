'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAppHeight } from "@/hooks/use-app-height";

export default function HeroSection() {
  useAppHeight();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add('hero-loading');
    return () => document.body.classList.remove('hero-loading');
  }, []);

  return (
    <section className="relative h-[var(--app-height)] overflow-hidden bg-black">
      {/* Background placeholder */}
      <div className={`absolute inset-0 z-0 bg-gray-900 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />

      {/* Mobile Background Video */}
      <video
        src="/images/balls.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-[0.4] md:hidden"
      />

      {/* Desktop Background Image */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/hero-boat.webp"
          alt="Beautiful marina at sunset with boats docked in Kelowna"
          fill
          className={`object-cover brightness-[0.4] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRh4CAABXRUJQVlA4TBECAAAv/8A/EP8QEQAREZEQERER..."
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Content at bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className={`grid gap-6 transition-opacity duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="font-playfair text-4xl sm:text-5xl font-light tracking-tight text-white">
            YOUR BOAT, <br />
            <span className="text-gold">BUT BETTER.</span>
          </h1>
          <p className="text-white/90 font-light text-base sm:text-lg tracking-wide">
            Experience the ultimate convenience with our mobile boat detailing services in Kelowna & the Okanagan.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#quote" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90">
                GET A FREE QUOTE
              </Button>
            </a>
            <a
              href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-gold bg-black text-gold hover:bg-black/90 hover:text-gold/90"
              >
                BOOK A DETAIL
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
