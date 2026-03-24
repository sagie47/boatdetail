"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import AnimatedPage from "@/components/ui/AnimatedPage";
import ScrollAnimatedSection from "@/components/ui/ScrollAnimatedSection";
import BookingLink from "@/components/tracking/BookingLink";

interface GalleryItem {
  src: string;
  type: "image" | "video";
  thumbnail?: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/images/IMG_0670.jpg", type: "image", alt: "Boat detailing work 1" },
  { src: "/images/IMG_0991.jpg", type: "image", alt: "Boat detailing work 2" },
  { src: "/images/IMG_1036.jpg", type: "image", alt: "Boat detailing work 3" },
  { src: "/images/afte.png", type: "image", alt: "After detailing result" },
  { src: "/images/interior2.jpg", type: "image", alt: "Detailed boat interior" },
  { src: "/images/before.png", type: "image", alt: "Before detailing condition" },
  { src: "/images/pop.png", type: "image", alt: "Detailed boat exterior" },
  { src: "/images/ppp.png", type: "image", alt: "Detailed marine surface" },
  {
    src: "/images/boat-detailing-video.mp4",
    type: "video",
    thumbnail: "/images/thumbvid1.png",
    alt: "Boat detailing video",
  },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = (direction: "prev" | "next") => {
    setCurrentIndex((index) => {
      if (index === null) {
        return index;
      }

      return direction === "prev"
        ? (index - 1 + galleryItems.length) % galleryItems.length
        : (index + 1) % galleryItems.length;
    });
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) {
        return;
      }

      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowLeft") {
        navigate("prev");
      } else if (event.key === "ArrowRight") {
        navigate("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-white">
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
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-gold transition-colors hover:text-gold/80"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-light">BACK TO HOME</span>
            </Link>
            <h1 className="mb-4 font-playfair text-4xl font-light text-white md:text-5xl lg:text-6xl">
              Our Work Gallery
            </h1>
            <p className="max-w-2xl font-light text-white/80 md:text-lg">
              Explore our portfolio of premium boat detailing services. Each image
              represents our commitment to craftsmanship and finish quality.
            </p>
          </div>
        </header>
      </ScrollAnimatedSection>

      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["All", "Exterior", "Interior", "Process", "Results"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="whitespace-nowrap border-gold bg-black text-gold hover:bg-black/90"
              >
                {filter.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <AnimatedPage>
        <ScrollAnimatedSection animationType="zoomIn" className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {galleryItems.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-square">
                    {item.type === "video" ? (
                      <div className="relative h-full w-full">
                        <video
                          className="h-full w-full object-cover"
                          poster={item.thumbnail}
                          playsInline
                          preload="metadata"
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                          <svg
                            className="h-12 w-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={300}
                          height={300}
                          className="max-h-full max-w-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-lg font-light text-white">
                      {item.type === "video" ? "Play Video" : "View Image"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animationType="fadeIn" className="bg-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready to Transform Your Boat?
            </h2>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[200px] bg-gold text-black hover:bg-gold/90">
                <Link href="/contact">GET A QUOTE</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[200px] border-gold bg-transparent text-gold hover:bg-gold hover:text-black"
              >
                <BookingLink placement="gallery_footer_cta">BOOK NOW</BookingLink>
              </Button>
            </div>
          </div>
        </ScrollAnimatedSection>
      </AnimatedPage>

      {isModalOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-[51] text-4xl text-white hover:text-gray-300"
            onClick={(event) => {
              event.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-[51] -translate-y-1/2 p-2 text-4xl text-white hover:text-gray-300"
            onClick={(event) => {
              event.stopPropagation();
              navigate("prev");
            }}
          >
            &larr;
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-[51] -translate-y-1/2 p-2 text-4xl text-white hover:text-gray-300"
            onClick={(event) => {
              event.stopPropagation();
              navigate("next");
            }}
          >
            &rarr;
          </button>
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {galleryItems[currentIndex].type === "video" ? (
              <video
                className="max-h-[90vh] max-w-full"
                src={galleryItems[currentIndex].src}
                controls
                autoPlay
                loop
              />
            ) : (
              <Image
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] max-w-full object-contain"
              />
            )}
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </div>
  );
}
