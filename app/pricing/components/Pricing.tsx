'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="container px-4">
        <h2 className="mb-6 text-center font-playfair text-3xl font-light">OUR SERVICES & PRICING</h2>
        <p className="mb-12 text-center text-gray-600 max-w-3xl mx-auto">
          Professional boat detailing services tailored to your vessel&apos;s needs. All services are performed by our
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
  );
}