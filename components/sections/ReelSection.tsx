'use client';

import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ReelSectionProps {
  children?: React.ReactNode;
  className?: string;
}

const ReelSection: React.FC<ReelSectionProps> = ({ children, className }) => {
  const isMobile = useIsMobile();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(error => {
            console.error("Video play failed:", error);
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <section className={`relative h-screen w-full snap-start overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/images/REE.mp4"
      />
      <div className="absolute inset-0 bg-black/20 z-0" />
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </section>
  );
};

export default ReelSection;