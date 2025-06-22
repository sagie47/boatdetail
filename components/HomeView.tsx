'use client';

import { Suspense } from 'react';
import { Button } from "@/components/ui/button";
import SearchParamsClient from '@/components/SearchParamsClient';
import AnimatedPage from '@/components/ui/AnimatedPage';
import ScrollAnimatedSection from '@/components/ui/ScrollAnimatedSection';
import PageLayout from '@/components/layout/PageLayout';
import { useIsMobile } from '@/hooks/use-mobile';

import HeroSection from '@/components/sections/HeroSection';
import ReelSection from '@/components/sections/ReelSection';
import ServiceHighlights from '@/components/sections/ServiceHighlights';
import ProfessionalWashing from '@/components/sections/ProfessionalWashing';
import Stats from '@/components/sections/Stats';
import Gallery from '@/app/gallery/components/Gallery';
import Pricing from '@/app/pricing/components/Pricing';
import QuoteCalculator from '@/components/sections/QuoteCalculator';
import Testimonials from '@/components/sections/Testimonials';

export default function HomeView() {
  const isMobile = useIsMobile();

  return (
    <PageLayout>
      <div>
        <Suspense fallback={null}>
          <SearchParamsClient />
        </Suspense>
        
        {isMobile ? (
          <ReelSection className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
            <HeroSection />
          </ReelSection>
        ) : (
          <HeroSection />
        )}

        {/* Trust Section */}
        <section className="border-b bg-white">
          <div className="container grid grid-cols-1 gap-1 px-4 py-1">
            <div className="flex flex-col justify-center">
              <div className="h-1"></div>
            </div>
          </div>
        </section>

        {/* Headline */}
        <AnimatedPage>
          <ScrollAnimatedSection animationType="fadeIn" className="bg-white py-16">
            <div className="container px-4">
              <h2 className="font-playfair text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                Expert Boat Detailing:{" "}
                <span className="font-medium text-black">From Freshwater to Finish Line</span>
              </h2>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="slideIn">
            <ServiceHighlights />
          </ScrollAnimatedSection>
          <ScrollAnimatedSection animationType="zoomIn">
            <ProfessionalWashing />
          </ScrollAnimatedSection>
          <ScrollAnimatedSection animationType="fadeIn">
            <Stats />
          </ScrollAnimatedSection>
          <ScrollAnimatedSection animationType="slideIn">
            <Gallery />
          </ScrollAnimatedSection>
          <ScrollAnimatedSection animationType="zoomIn">
            <Pricing />
          </ScrollAnimatedSection>
          <div id="quote">
            <ScrollAnimatedSection animationType="fadeIn">
              <QuoteCalculator />
            </ScrollAnimatedSection>
          </div>
          <ScrollAnimatedSection animationType="slideIn">
            <Testimonials />
          </ScrollAnimatedSection>

          {/* CTA Banner */}
          <ScrollAnimatedSection animationType="zoomIn" className="bg-black py-16">
            <div className="container px-4 text-center">
              <h2 className="mb-8 font-playfair text-3xl font-light text-white">
                Ready to Make Waves with a Clean Boat?
              </h2>
              <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
                  BOOK MY DETAIL
                </Button>
              </a>
            </div>
          </ScrollAnimatedSection>
        </AnimatedPage>
      </div>
    </PageLayout>
  );
}