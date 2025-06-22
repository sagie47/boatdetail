"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  type: 'image' | 'video';
  thumbnail?: string;
  formats?: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
    { src: '/images/IMG_0670.jpg', type: 'image' },
    { src: '/images/IMG_0991.jpg', type: 'image' },
    { src: '/images/IMG_1036.jpg', type: 'image' },
    { src: '/images/afte.png', type: 'image' },
    { src: '/images/ass.jpeg', type: 'image' },
    { src: '/images/before.png', type: 'image' },
    { src: '/images/fap.png', type: 'image' },
    { src: '/images/poop.jpeg', type: 'image' },
    { src: '/images/pop.png', type: 'image' },
    { src: '/images/ppp.png', type: 'image' },
    { src: '/images/suck.jpeg', type: 'image' },
    { 
      src: '/images/whore.mp4', 
      type: 'video',
      thumbnail: '/images/thumbnails/whore-thumbnail.jpg',
      formats: ['mp4']
    },
    { src: '/images/img.jpeg', type: 'image' },
    { 
      src: '/images/gaf.mp4', 
      type: 'video',
      thumbnail: '/images/thumbnails/gaf-thumbnail.jpg',
      formats: ['mp4']
    }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {GALLERY_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square">
                  {item.type === 'video' ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={item.thumbnail || item.src}
                        alt={`Video thumbnail ${index + 1}`}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer">
                        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-gray-100">
                      <Image
                        src={item.src}
                        alt={`Gallery item ${index + 1}`}
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
                    {item.type === 'video' ? 'Play Video' : 'View Image'}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
                alt={`Gallery item ${currentIndex + 1}`}
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