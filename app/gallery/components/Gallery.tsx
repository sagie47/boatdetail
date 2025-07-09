"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from 'embla-carousel-react'

interface GalleryItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
  thumbnail?: string;
  formats?: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
    { src: '/images/IMG_0670.jpg', alt: 'A freshly detailed boat interior, showing clean seats and sparkling surfaces.', type: 'image' },
    { src: '/images/IMG_0675 (1).jpg', alt: 'Detailed view of a boat cabin after professional cleaning and conditioning.', type: 'image' },
    { src: '/images/IMG_0991.jpg', alt: 'The gleaming hull of a boat after a complete exterior wash and wax.', type: 'image' },
    { src: '/images/IMG_1036.jpg', alt: 'A close-up of a polished boat dashboard, reflecting the clear sky.', type: 'image' },
    { src: '/images/afte.png', alt: 'Side-by-side comparison showing the boat before and after detailing.', type: 'image' },
    { src: '/images/boat-interior-cleaning.jpeg', alt: 'Deep cleaning of boat upholstery, removing stains and grime.', type: 'image' },
    { src: '/images/before.png', alt: 'A boat with visible dirt and oxidation before the detailing process.', type: 'image' },
    { src: '/images/boat-polishing.png', alt: 'A detailer carefully polishing the gelcoat of a boat to a high shine.', type: 'image' },
    { src: '/images/boat-hull-cleaning.jpeg', alt: 'Cleaning the underside of a boat hull to remove algae and buildup.', type: 'image' },
    { src: '/images/pop.png', alt: 'A satisfying shot of a boat shining in the sun after being detailed.', type: 'image' },
    { src: '/images/ppp.png', alt: 'A freshly cleaned boat deck, ready for guests.', type: 'image' },
    { src: '/images/boat-vacuuming.jpeg', alt: 'Technician vacuuming the carpet of a boat cabin.', type: 'image' },
    { src: '/images/bottom.jpg', alt: 'Detailed view of a boat hull after professional cleaning and polishing.', type: 'image' },
    { src: '/images/cockpit.jpg', alt: 'Clean and polished boat cockpit with all surfaces properly treated.', type: 'image' },
    { src: '/images/cup.jpg', alt: 'Close-up of a cup holder area after deep cleaning and protection.', type: 'image' },
    { src: '/images/exterior.jpg', alt: 'Boat exterior after a complete wash and wax service.', type: 'image' },
    { src: '/images/interior2.jpg', alt: 'Boat interior with all surfaces cleaned and conditioned.', type: 'image' },
    { src: '/images/interior3.jpg', alt: 'Detailed view of boat upholstery after professional cleaning.', type: 'image' },
    { src: '/images/panel.jpg', alt: 'Boat control panel cleaned and polished to perfection.', type: 'image' },
    { src: '/images/pic.jpeg', alt: 'Boat exterior shining after a complete detailing service.', type: 'image' },
    { src: '/images/yacht1.jpg', alt: 'Luxury yacht after professional detailing service.', type: 'image' },
    { src: '/images/yacht2.jpg', alt: 'Another view of a luxury yacht after professional detailing.', type: 'image' },
    {
      src: '/images/boat-detailing-video.mp4',
      alt: 'A short video showcasing the boat detailing process from start to finish.',
      type: 'video',
      thumbnail: '/images/thumbvid1.png',
      formats: ['mp4']
    },
    {
      src: '/images/boat-washing-video.mp4',
      alt: 'A video of a boat being professionally washed with foam cannon.',
      type: 'video',
      thumbnail: '/images/thumbvid2.png',
      formats: ['mp4']
    },
    {
      src: '/images/Vid2.mp4',
      alt: 'Video showing the transformation of a boat during the detailing process.',
      type: 'video',
      thumbnail: '/images/thumb1.png',
      formats: ['mp4']
    },
    {
      src: '/images/balls.mp4',
      alt: 'Close-up video of cleaning hard-to-reach areas on a boat.',
      type: 'video',
      thumbnail: '/images/thumb2.png',
      formats: ['mp4']
    }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const [emblaRef] = useEmblaCarousel({ loop: true, active: isMobile });

  const DESKTOP_INITIAL_COUNT = 8;
  const itemsToShow =
    isMobile || isExpanded
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.slice(0, DESKTOP_INITIAL_COUNT);

  const openModal = (index: number) => {
    const actualIndex = GALLERY_ITEMS.findIndex(
      (item) => item.src === itemsToShow[index].src
    );
    setCurrentIndex(actualIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (currentIndex === null) return;
    
    let newIndex = currentIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    } else {
      newIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    }
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigate('prev');
      } else if (e.key === 'ArrowRight') {
        navigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, navigate]);

  return (
    <>
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="mb-12 text-center font-playfair text-3xl font-light">OUR GALLERY</h2>
          {isMobile ? (
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {GALLERY_ITEMS.map((item, index) => (
                  <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={index}>
                    <div
                      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <div className="aspect-square">
                        {item.type === "video" ? (
                          <div className="relative h-full w-full">
                            <Image
                              src={item.thumbnail || item.src}
                              alt={item.alt}
                              width={300}
                              height={300}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer">
                              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg
                                  className="w-8 h-8 text-black"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full w-full bg-gray-100">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              width={300}
                              height={300}
                              className="max-h-full max-w-full object-contain p-2"
                              loading="lazy"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-light">
                          {item.type === "video" ? "Play Video" : "View Image"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {isMobile && 
              <div className="flex justify-center mt-4">
                Swipe to see more
              </div>
              }
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {itemsToShow.map((item, index) => (
                <div
                  key={item.src}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer animate-fadeIn"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-square">
                    {item.type === "video" ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={item.thumbnail || item.src}
                          alt={item.alt}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer">
                          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              className="w-8 h-8 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full w-full bg-gray-100">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={300}
                          height={300}
                          className="max-h-full max-w-full object-contain p-2"
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-light">
                      {item.type === "video" ? "Play Video" : "View Image"}
                    </span>
                  </div>
                </div>
              ))}
              {!isMobile && GALLERY_ITEMS.length > DESKTOP_INITIAL_COUNT && (
                <div className="mt-12 text-center">
                  <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-gold text-black border-gold hover:bg-gold/90 font-light tracking-wider"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate('prev');
            }}
          >
            &larr;
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate('next');
            }}
          >
            &rarr;
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {GALLERY_ITEMS[currentIndex].type === 'video' ? (
              <video 
                className="max-h-[90vh] w-auto max-w-full"
                src={GALLERY_ITEMS[currentIndex].src}
                controls
                autoPlay
                loop
                onClick={e => e.stopPropagation()}
              />
            ) : (
              <Image
                src={GALLERY_ITEMS[currentIndex].src}
                alt={GALLERY_ITEMS[currentIndex].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto max-w-full object-contain"
                onClick={e => e.stopPropagation()}
              />
            )}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
            {currentIndex + 1} / {GALLERY_ITEMS.length}
          </div>
        </div>
      )}
    </>
  );
}