'use client';

import { Suspense } from 'react';
import SearchParamsClient from '@/components/SearchParamsClient';
import AnimatedPage from '@/components/ui/AnimatedPage';
import ScrollAnimatedSection from '@/components/ui/ScrollAnimatedSection';
import PageLayout from '@/components/layout/PageLayout';

import HeroSection from '@/components/sections/HeroSection';
import ServiceHighlights from '@/components/sections/ServiceHighlights';
import ProfessionalWashing from '@/components/sections/ProfessionalWashing';
import SeasonalOffers from '@/components/sections/SeasonalOffers';
import Stats from '@/components/sections/Stats';
import Gallery from '@/app/gallery/components/Gallery';
import Pricing from '@/app/pricing/components/Pricing';
import QuoteCalculator from '@/components/sections/QuoteCalculator';
import Testimonials from '@/components/sections/Testimonials';
import BookingLink from '@/components/tracking/BookingLink';
import { Button } from "@/components/ui/button";

export default function HomeView() {
  return (
    <PageLayout>
      <div>
        <Suspense fallback={null}>
          <SearchParamsClient />
        </Suspense>
        
        <HeroSection />

        {/* Headline */}
        <AnimatedPage>
          <ScrollAnimatedSection animationType="fadeIn">
            <Stats />
          </ScrollAnimatedSection>
          <ScrollAnimatedSection animationType="fadeIn">
            <SeasonalOffers />
          </ScrollAnimatedSection>
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
          <ScrollAnimatedSection animationType="slideIn">
            <Gallery />
          </ScrollAnimatedSection>

          {/* CTA Banner */}
          <ScrollAnimatedSection animationType="zoomIn" className="bg-black py-16">
            <div className="container px-4 text-center">
              <h2 className="mb-8 font-playfair text-3xl font-light text-white">
                Ready to Make Waves with a Clean Boat?
              </h2>
              <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90">
                <BookingLink placement="home_footer_cta">BOOK MY DETAIL</BookingLink>
              </Button>
            </div>
          </ScrollAnimatedSection>
        </AnimatedPage>
      </div>
    </PageLayout>
  );
}
