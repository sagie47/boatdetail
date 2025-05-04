"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import { Star, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SearchParamsClient from '@/components/SearchParamsClient';
import { Suspense } from 'react';

interface QuoteFormData {
  boatLength: number;
  boatType: string;
  services: string[];
  location: string;
  utilities: {
    water: boolean;
    electricity: boolean;
  };
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

const SERVICES = [
  { name: 'Basic Exterior Wash', priceMin: 15, priceMax: 25, perFoot: true, description: 'Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal (non-polish); quick-dry with microfiber towels; spray wax application (3–6 month protection)' },
  { name: 'Interior Basic Clean', priceMin: 12, priceMax: 18, perFoot: true, description: 'Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light dusting of vents and compartments' },
  { name: 'Full Exterior & Interior Detail Package', priceMin: 45, priceMax: 80, perFoot: true, description: 'Complete oxidation removal and polish; ceramic spray sealant application; full interior deep clean and upholstery conditioning; glass and chrome polishing inside and out' },
  { name: 'Oxidation Removal & Gelcoat Polish', priceMin: 35, priceMax: 75, perFoot: true, description: 'Single-step polish for light oxidation ($35–$50/ft); multi-step polish for heavy oxidation ($60–$75/ft); acid wash prep if needed; rotary buffer with marine pads; hybrid ceramic spray sealant included' },
  { name: 'Ceramic Spray Sealant', priceMin: 8, priceMax: 12, perFoot: true, description: 'Hydrophobic layer for long-lasting shine and protection, perfect between full details' },
  { name: 'Interior Deep Clean & Upholstery Care', priceMin: 18, priceMax: 30, perFoot: true, description: 'Includes Basic Interior Clean services; shampoo carpets and fabric seats; condition and protect vinyl/leather upholstery; deodorize and sanitize interior' },
  { name: 'Engine Bay Cleaning', priceMin: 85, priceMax: 175, perFoot: false, description: 'Degrease and scrub engine compartment; low-pressure rinse; plastic/rubber dressing application' },
];

export default function Home() {
  const [formData, setFormData] = useState<QuoteFormData>({
    boatLength: 0,
    boatType: 'pontoon',
    services: [],
    location: 'docked',
    utilities: {
      water: false,
      electricity: false,
    },
    contact: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const [showQuote, setShowQuote] = useState(false);
  const [quoteMin, setQuoteMin] = useState(0);
  const [quoteMax, setQuoteMax] = useState(0);

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const calculateQuote = (e: FormEvent) => {
    e.preventDefault();
    const totals = formData.services.reduce((acc, service) => {
      const s = SERVICES.find(item => item.name === service);
      if (!s) return acc;
      if (s.perFoot) {
        acc.min += s.priceMin * formData.boatLength;
        acc.max += s.priceMax * formData.boatLength;
      } else {
        acc.min += s.priceMin;
        acc.max += s.priceMax;
      }
      return acc;
    }, { min: 0, max: 0 });
    setQuoteMin(totals.min);
    setQuoteMax(totals.max);
    setShowQuote(true);
  };

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* PAGE CONTENT STARTS HERE */}
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsClient />
        </Suspense>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.jpg"
              alt="Beautiful marina at sunset with boats docked in Kelowna"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-32 md:py-40 lg:py-52">
            <div className="grid gap-6 md:w-2/3 lg:w-1/2">
              <h1 className="font-playfair text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl">
                YOUR BOAT, <br />
                <span className="text-gold">BUT BETTER.</span>
              </h1>
              <p className="font-light tracking-wide text-white/90 md:text-xl">
                Mobile Boat Detailing in Kelowna & the Okanagan
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90">
                    BOOK A DETAIL
                  </Button>
                </a>
                <a href="#quote" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-gold bg-black text-gold hover:bg-black/90 hover:text-gold/90"
                  >
                    GET A FREE QUOTE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="border-b bg-white">
          <div className="container grid grid-cols-1 gap-1 px-4 py-1">
            <div className="flex flex-col justify-center">
              <div className="h-1"></div>
            </div>
          </div>
        </section>

        {/* Headline */}
        <section className="bg-white py-16">
          <div className="container px-4">
            <h2 className="font-playfair text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              Expert Boat Detailing:{" "}
              <span className="font-medium text-black">From Freshwater to Finish Line</span>
            </h2>
          </div>
        </section>

        {/* Service Highlights */}
        <section id="services" className="bg-white py-12">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "EXTERIOR WASH & DRY",
                  image: "/images/pic.jpeg",
                  color: "bg-gold",
                },
                {
                  title: "INTERIOR CLEANING",
                  image: "/images/pic1.png",
                  color: "bg-gold",
                },
                {
                  title: "OXIDATION REMOVAL",
                  image: "/images/pic3.png",
                  color: "bg-gold",
                },
                {
                  title: "INTERIOR AND EXTERIOR CLEANING",
                  image: "/images/boat.png",
                  color: "bg-gold",
                },
              ].map((service, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 w-full p-4">
                    <div
                      className={`mb-2 w-fit ${service.color} px-2 py-1 text-xs font-light tracking-wider text-black`}
                    >
                      BOOK NOW
                    </div>
                    <h3 className="font-light tracking-wider text-white">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Washing Section */}
        <section className="bg-gray-50 py-16">
          <div className="container px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-playfair text-3xl font-light">Professional Washing and Cleaning Boats</h2>
                <p className="mb-4 font-light text-gray-700 leading-relaxed">
                  With over a decade of experience, Kelowna Boat Detailing brings showroom shine dockside. From family
                  pontoons to high-performance wakeboats — we've got you covered.
                </p>
                <p className="mb-6 font-light text-gray-700 leading-relaxed">
                  Our services include Exterior Washing, Interior Deep Cleaning, Gelcoat Polishing, Teak Wood
                  Restoration, and Ceramic Coating. Choose the best service level for your boat with our premium
                  detailing packages.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gold/10 p-1">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-sm font-light">UV and Mold Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gold/10 p-1">
                      <Check className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-sm font-light">100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Stats Section */}
        <section className="bg-black py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-black border border-gold/30 p-8 text-center">
                <p className="font-playfair text-3xl font-light text-gold">100+</p>
                <p className="mt-2 text-sm font-light tracking-wider text-white/70">HAPPY CUSTOMERS</p>
              </div>
              <div className="rounded-lg bg-black border border-gold/30 p-8 text-center">
                <p className="font-playfair text-3xl font-light text-gold">4.8✯</p>
                <p className="mt-2 text-sm font-light tracking-wider text-white/70">AVERAGE RATING</p>
              </div>
              <div className="rounded-lg bg-black border border-gold/30 p-8 text-center">
                <p className="font-playfair text-3xl font-light text-gold">1,000+</p>
                <p className="mt-2 text-sm font-light tracking-wider text-white/70">HOURS OF DETAILING</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-white py-16">
          <div className="container px-4">
            <h2 className="mb-6 text-center font-playfair text-3xl font-light">OUR SERVICES & PRICING</h2>
            <p className="mb-12 text-center text-gray-600 max-w-3xl mx-auto">
              Professional boat detailing services tailored to your vessel's needs. All services are performed by our
              experienced team using premium products.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Core Services */}
              <Card className="flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="bg-gray-50 p-6 text-center">
                  <h3 className="font-light tracking-wider text-xl">BASIC EXTERIOR WASH</h3>
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <span className="font-playfair text-4xl font-light">$15–$25</span>
                    <span className="text-sm text-gray-500">/ft</span>
                  </div>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Foam cannon presoak</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Hand wash with marine-grade shampoo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Water spot removal (non-polish)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Quick-dry with microfiber towels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Spray wax application (3–6 month protection)</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="bg-gray-50 p-6 text-center">
                  <h3 className="font-light tracking-wider text-xl">INTERIOR BASIC CLEAN</h3>
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <span className="font-playfair text-4xl font-light">$12–$18</span>
                    <span className="text-sm text-gray-500">/ft</span>
                  </div>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Vacuum carpets and upholstery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Wipe down hard surfaces and vinyl</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Clean windows and mirrors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Light dusting of vents and compartments</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl relative">
                <div className="absolute top-0 right-0 bg-gold px-4 py-1 text-xs font-light tracking-wider text-black">
                  POPULAR
                </div>
                <div className="bg-black p-6 text-center">
                  <h3 className="font-light tracking-wider text-xl text-gold">FULL EXTERIOR & INTERIOR DETAIL PACKAGE</h3>
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <span className="font-playfair text-4xl font-light">$45–$80</span>
                    <span className="text-sm text-gray-500">/ft</span>
                  </div>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Complete oxidation removal and polish</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Ceramic spray sealant application</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Full interior deep clean and upholstery conditioning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Glass and chrome polishing inside and out</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="bg-gray-50 p-6 text-center">
                  <h3 className="font-light tracking-wider text-xl">OXIDATION REMOVAL & GELCOAT POLISH</h3>
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <span className="font-playfair text-4xl font-light">$35–$75</span>
                    <span className="text-sm text-gray-500">/ft</span>
                  </div>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Single-step polish for light oxidation ($35–$50/ft)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Multi-step polish for heavy oxidation ($60–$75/ft)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Acid wash prep if needed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Rotary buffer with marine pads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Hybrid ceramic spray sealant included</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Ceramic Spray Sealant */}
              <Card className="flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="bg-gray-50 p-6 text-center">
                  <h3 className="font-light tracking-wider text-xl">INTERIOR DEEP CLEAN & UPHOLSTERY CARE</h3>
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <span className="font-playfair text-4xl font-light">$18–$30</span>
                    <span className="text-sm text-gray-500">/ft</span>
                  </div>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Includes Basic Interior Clean services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Shampoo carpets and fabric seats</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Condition and protect vinyl/leather upholstery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Deodorize and sanitize interior</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Engine Bay Cleaning */}
              <Card className="flex flex-col overflow-hidden rounded-lg border-0 shadow-lg transition-all hover:shadow-xl">
                <div className="bg-gray-50 p-6 text-center">
                  <h3 className="font-light tracking-wider text-xl">ENGINE BAY CLEANING</h3>
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <span className="font-playfair text-4xl font-light">$85–$175</span>
                    <span className="text-sm text-gray-500"> flat rate</span>
                  </div>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Degrease and scrub engine compartment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Low-pressure rinse</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-gold" />
                      <span className="font-light">Plastic/rubber dressing application</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gold text-black hover:bg-gold/90">BOOK SERVICE</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Add-Ons Section */}
            <div className="mt-16">
              <h3 className="mb-8 text-center font-playfair text-2xl font-light">ADD-ON SERVICES</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-gold hover:shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-light tracking-wider text-lg">METAL POLISHING</h4>
                    <span className="font-playfair text-xl font-light">$50–$100</span>
                  </div>
                  <p className="text-gray-600 font-light">Polish cleats, rails, etc. Flat rate depending on size.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6 transition-all hover:border-gold hover:shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-light tracking-wider text-lg">MOLD & MILDEW SPOT CLEANING</h4>
                    <span className="font-playfair text-xl font-light">$75+</span>
                  </div>
                  <p className="text-gray-600 font-light">Targeted treatment for seats, compartments. Price per job.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Quote Calculator */}
        <section id="quote" className="relative bg-black py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.jpg"
              alt="Luxury boat at sunset"
              fill
              className="object-cover brightness-[0.15]"
            />
          </div>
          <div className="container relative z-10 px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl text-gold font-light mb-4">
                Instant Quote Calculator
              </h2>
              <p className="text-white/80 md:text-lg font-light max-w-2xl mx-auto">
                Get an instant estimate for your boat detailing needs. Select your services and preferences below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Services Price List */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-xl p-8 space-y-6">
                <h3 className="font-playfair text-2xl text-gold font-light mb-6">Our Premium Services</h3>
                {/* Basic Exterior Wash */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Basic Exterior Wash</h4>
                    <span className="text-white/90 font-light">$15–$25/ft</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal (non-polish); quick-dry with microfiber towels; spray wax application (3–6 month protection)</p>
                </div>
                {/* Interior Basic Clean */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Interior Basic Clean</h4>
                    <span className="text-white/90 font-light">$12–$18/ft</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light dusting of vents and compartments</p>
                </div>
                {/* Full Exterior & Interior Detail Package */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Full Exterior & Interior Detail Package</h4>
                    <span className="text-white/90 font-light">$45–$80/ft</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Complete oxidation removal and polish; ceramic spray sealant application; full interior deep clean and upholstery conditioning; glass and chrome polishing inside and out</p>
                </div>
                {/* Oxidation Removal & Gelcoat Polish */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Oxidation Removal & Gelcoat Polish</h4>
                    <span className="text-white/90 font-light">$35–$75/ft</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Single-step polish for light oxidation ($35–$50/ft); multi-step polish for heavy oxidation ($60–$75/ft); acid wash prep if needed; rotary buffer with marine pads; hybrid ceramic spray sealant included</p>
                </div>
                {/* Ceramic Spray Sealant */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Ceramic Spray Sealant</h4>
                    <span className="text-white/90 font-light">$8–$12/ft</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Hydrophobic layer for long-lasting shine and protection, perfect between full details</p>
                </div>
                {/* Interior Deep Clean & Upholstery Care */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Interior Deep Clean & Upholstery Care</h4>
                    <span className="text-white/90 font-light">$18–$30/ft</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Includes Basic Interior Clean services; shampoo carpets and fabric seats; condition and protect vinyl/leather upholstery; deodorize and sanitize interior</p>
                </div>
                {/* Engine Bay Cleaning */}
                <div className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-gold text-xl font-light">Engine Bay Cleaning</h4>
                    <span className="text-white/90 font-light">$85–$175 flat</span>
                  </div>
                  <p className="text-white/70 text-sm font-light">Degrease and scrub engine compartment; low-pressure rinse; plastic/rubber dressing application</p>
                </div>
              </div>

              {/* Quote Form */}
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-xl p-8">
                <h3 className="font-playfair text-2xl text-gold font-light mb-6">Get Your Quote</h3>
                <form className="space-y-6" onSubmit={calculateQuote}>
                  {/* Boat Length */}
                  <div>
                    <label className="block text-white/90 text-sm font-light mb-2">Boat Length (ft)</label>
                    <input
                      type="number"
                      min="10"
                      max="60"
                      className="w-full bg-black/60 border border-gold/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Enter boat length"
                      value={formData.boatLength || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, boatLength: parseInt(e.target.value) || 0 }))}
                      required
                    />
                  </div>

                  {/* Boat Type */}
                  <div>
                    <label className="block text-white/90 text-sm font-light mb-2">Boat Type</label>
                    <select
                      className="w-full bg-black/60 border border-gold/30 rounded-lg px-4 py-2 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      value={formData.boatType}
                      onChange={(e) => setFormData(prev => ({ ...prev, boatType: e.target.value }))}
                    >
                      <option value="pontoon">Pontoon</option>
                      <option value="wakeboat">Wakeboat</option>
                      <option value="yacht">Yacht</option>
                      <option value="fishing">Fishing Boat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/* Services */}
                  <div>
                    <label className="block text-white/90 text-sm font-light mb-2">Services</label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => (
                        <button
                          type="button"
                          key={service.name}
                          className={`rounded-lg border px-3 py-1 text-sm font-light transition-colors ${formData.services.includes(service.name)
                            ? 'bg-gold text-black border-gold'
                            : 'bg-black/60 text-white border-gold/30 hover:bg-gold/10'}`}
                          onClick={() => handleServiceChange(service.name)}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Location */}
                  <div>
                    <label className="block text-white/90 text-sm font-light mb-2">Location</label>
                    <select
                      className="w-full bg-black/60 border border-gold/30 rounded-lg px-4 py-2 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    >
                      <option value="docked">Docked</option>
                      <option value="trailered">Trailored</option>
                    </select>
                  </div>
                  {/* Utilities */}
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-white/90 text-sm font-light">
                      <input
                        type="checkbox"
                        checked={formData.utilities.water}
                        onChange={(e) => setFormData(prev => ({ ...prev, utilities: { ...prev.utilities, water: e.target.checked } }))}
                      />
                      Water Available
                    </label>
                    <label className="flex items-center gap-2 text-white/90 text-sm font-light">
                      <input
                        type="checkbox"
                        checked={formData.utilities.electricity}
                        onChange={(e) => setFormData(prev => ({ ...prev, utilities: { ...prev.utilities, electricity: e.target.checked } }))}
                      />
                      Electricity Available
                    </label>
                  </div>
                  {/* Contact Info */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      className="w-full bg-black/60 border border-gold/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Name"
                      value={formData.contact.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, name: e.target.value } }))}
                      required
                    />
                    <input
                      type="tel"
                      className="w-full bg-black/60 border border-gold/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Phone"
                      value={formData.contact.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))}
                      required
                    />
                    <input
                      type="email"
                      className="w-full bg-black/60 border border-gold/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Email"
                      value={formData.contact.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))}
                      required
                    />
                  </div>
                  <a href="https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP" target="_blank" rel="noopener noreferrer">
                    <Button type="submit" className="w-full bg-gold text-black hover:bg-gold/90 mt-6">
                      GET QUOTE
                    </Button>
                  </a>
                </form>
                {/* Quote Result */}
                {showQuote && (
                  <div className="mt-8 rounded-lg bg-black/60 p-6 text-center text-white">
                    <h4 className="mb-2 font-playfair text-2xl text-gold">Your Estimated Total</h4>
                    <p className="text-3xl font-light mb-2">
                      {quoteMin === quoteMax ? `$${quoteMin}` : `$${quoteMin} – $${quoteMax}`}
                    </p>
                    <p className="text-white/70 text-sm">This is an estimate. We will contact you to confirm your booking and final price.</p>
                    <Button className="mt-6 bg-gold text-black hover:bg-gold/90" onClick={() => setShowQuote(false)}>
                      CLOSE
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-gray-50 py-16">
          <div className="container px-4">
            <h2 className="mb-12 text-center font-playfair text-3xl font-light">OUR HAPPY CLIENTS</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[{
                text: "The crew is so polite, the work is amazing, and the price is fair. I've been using them for years and my boat always looks brand new.",
                name: "Sarah Peterson",
                boat: "Sea Ray 210 SLX",
                image: "/images/cust1.jpg",
              },
              {
                text: "Simply the best. When all of the other detailers were booked, they made time for me before a big weekend. Exceptional work and customer service.",
                name: "David Jones",
                boat: "Mastercraft X24",
                image: "/images/cust2.jpg",
              },
              {
                text: "I cannot express how impressed I am with the ceramic coating they applied. My gelcoat looks better than it did when I first bought my boat 3 years ago.",
                name: "Anna Wilson",
                boat: "Bayliner Element",
                image: "/images/cust3.jpg",
              }].map((testimonial, i) => (
                <div key={i} className="rounded-lg bg-white p-8 shadow-lg">
                  <div className="mb-4 flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                  </div>
                  <p className="mb-6 font-light italic text-gray-700">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm font-light text-gray-500">{testimonial.boat}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/feedback">
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-black py-16">
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
        </section>
      </main>

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
                  <Link href="/terms-and-conditions" className="text-sm font-light text-gray-600 hover:text-gold transition-colors">
                    Terms & Conditions
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
    </div>
  );
}
