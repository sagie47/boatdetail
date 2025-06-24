'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  // Optimize initial paint with a simple background color while image loads
  useEffect(() => {
    // Add a class to the body when the component mounts to set a background color
    document.body.classList.add('hero-loading');
    
    // Remove it when image is loaded or component unmounts
    return () => document.body.classList.remove('hero-loading');
  }, []);

  return (
    <section className={`relative ${isMobile ? 'h-[100svh]' : 'h-full'}`}>
      {isMobile ? (
        <video
          src="/images/REE.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      ) : (
        <>
          {/* Placeholder that shows before image loads */}
          <div className={`absolute inset-0 z-0 bg-gray-900 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="Beautiful marina at sunset with boats docked in Kelowna"
              fill
              className={`object-cover brightness-[0.4] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRh4CAABXRUJQVlA4TBECAAAv/8A/EP8QEQAREZEQERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </>
      )}
      <div className={`container relative z-10 flex h-full flex-col ${isMobile ? 'items-start justify-end text-left' : 'justify-end'} px-4 pb-16 md:py-40 lg:py-52`}>
        <div className="grid gap-6 md:w-2/3 lg:w-1/2">
          <h1 className="font-playfair text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl">
            YOUR BOAT, <br />
            <span className="text-gold">BUT BETTER.</span>
          </h1>
          <p className="font-light tracking-wide text-white/90 md:text-xl">
            Experience the ultimate convenience with our mobile boat detailing services in Kelowna & the Okanagan.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#quote" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90">
                GET A FREE QUOTE
              </Button>
            </a>
            <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
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
