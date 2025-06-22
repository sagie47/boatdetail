"use client";

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";

interface GalleryItem {
  src: string;
  type: 'image' | 'video';
  thumbnail?: string;
  formats?: string[];
  alt?: string;
}

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const galleryItems: GalleryItem[] = [
    { src: '/images/IMG_0670.jpg', type: 'image', alt: 'Boat Detailing Work 1' },
    { src: '/images/IMG_0991.jpg', type: 'image', alt: 'Boat Detailing Work 2' },
    { src: '/images/IMG_1036.jpg', type: 'image', alt: 'Boat Detailing Work 3' },
    { src: '/images/afte.png', type: 'image', alt: 'After Detailing' },
    { src: '/images/ass.jpeg', type: 'image', alt: 'Detailed Boat Ass' },
    { src: '/images/before.png', type: 'image', alt: 'Before Detailing' },
    { src: '/images/fap.png', type: 'image', alt: 'Fap Image' },
    { src: '/images/poop.jpeg', type: 'image', alt: 'Poop Image' },
    { src: '/images/pop.png', type: 'image', alt: 'Pop Image' },
    { src: '/images/ppp.png', type: 'image', alt: 'PPP Image' },
    { src: '/images/suck.jpeg', type: 'image', alt: 'Suck Image' },
    { src: '/images/img.jpeg', type: 'image', alt: 'IMG Image' },
    { 
      src: '/images/whore.mp4', 
      type: 'video',
      thumbnail: '/images/thumbnails/whore-thumbnail.jpg',
      formats: ['mp4'],
      alt: 'Boat Detailing Video 2'
    },
    { 
      src: '/images/gaf.mp4', 
      type: 'video',
      thumbnail: '/images/thumbnails/gaf-thumbnail.jpg',
      formats: ['mp4'],
      alt: 'Boat Detailing Video 1'
    }
  ];

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (currentIndex === null) return;
    let newIndex = currentIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    } else {
      newIndex = (currentIndex + 1) % galleryItems.length;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') navigate('prev');
      else if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex, navigate]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ScrollAnimatedSection animationType="fadeIn">
        <header className="relative bg-black py-24">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero-boat.webp"
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
      </ScrollAnimatedSection>

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
      <AnimatedPage>
        <ScrollAnimatedSection animationType="zoomIn" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-square">
                    {item.type === 'video' ? (
                      <div className="relative h-full w-full">
                        <video
                          className="h-full w-full object-cover"
                          poster={item.thumbnail}
                          controls
                          playsInline
                          preload="metadata"
                        >
                          <source src={item.src} type="video/mp4" />
                          {item.formats?.includes('webm') && (
                            <source src={item.src.replace(/\.mp4$/i, '.webm')} type="video/webm" />
                          )}
                          Your browser does not support HTML5 video.
                        </video>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full w-full bg-gray-100">
                        <Image
                          src={item.src}
                          alt={item.alt || `Gallery item ${index + 1}`}
                          width={300}
                          height={300}
                          className="max-h-full max-w-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-light">
                      {item.type === 'video' ? 'Play Video' : 'View Image'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* CTA Section */}
        <ScrollAnimatedSection animationType="fadeIn" className="bg-black py-16">
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
        </ScrollAnimatedSection>
      </AnimatedPage>
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

      {/* Lightbox Modal */}
      {isModalOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-[51]"
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
          >
            &times;
          </button>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-[51] p-2"
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
          >
            &larr;
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-[51] p-2"
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
          >
            &rarr;
          </button>
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {galleryItems[currentIndex].type === 'video' ? (
              <video 
                className="max-h-[90vh] w-auto max-w-full"
                src={galleryItems[currentIndex].src}
                controls
                autoPlay
                loop
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <Image
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].alt || `Gallery item ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto max-w-full object-contain"
                onClick={e => e.stopPropagation()}
              />
            )}
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
  </div>
)
}