"use client";

import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export const SERVICES = [
  { name: 'Basic Exterior Wash', priceMin: 15, priceMax: 25, perFoot: true, description: 'Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal (non-polish); quick-dry with microfiber towels; spray wax application (3–6 month protection)' },
  { name: 'Interior Basic Clean', priceMin: 12, priceMax: 18, perFoot: true, description: 'Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light dusting of vents and compartments' },
  { name: 'Full Exterior & Interior Detail Package', priceMin: 45, priceMax: 80, perFoot: true, description: 'Complete oxidation removal and polish; ceramic spray sealant application; full interior deep clean and upholstery conditioning; glass and chrome polishing inside and out' },
  { name: 'Oxidation Removal & Gelcoat Polish', priceMin: 35, priceMax: 75, perFoot: true, description: 'Single-step polish for light oxidation ($35–$50/ft); multi-step polish for heavy oxidation ($60–$75/ft); acid wash prep if needed; rotary buffer with marine pads; hybrid ceramic spray sealant included' },
  { name: 'Ceramic Spray Sealant', priceMin: 8, priceMax: 12, perFoot: true, description: 'Hydrophobic layer for long-lasting shine and protection, perfect between full details' },
  { name: 'Interior Deep Clean & Upholstery Care', priceMin: 18, priceMax: 30, perFoot: true, description: 'Includes Basic Interior Clean services; shampoo carpets and fabric seats; condition and protect vinyl/leather upholstery; deodorize and sanitize interior' },
  { name: 'Engine Bay Cleaning', priceMin: 85, priceMax: 175, perFoot: false, description: 'Degrease and scrub engine compartment; low-pressure rinse; plastic/rubber dressing application' },
];

interface QuoteFormProps {
  onQuoteCalculated: (min: number, max: number) => void;
}

interface QuoteFormData {
  boatLength: number;
  services: string[];
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

export default function QuoteForm({ onQuoteCalculated }: QuoteFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    boatLength: 0,
    services: [],
    contact: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const handleServiceChange = useCallback((service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  }, []);

  const calculateQuote = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // If no services selected, don't calculate
    if (formData.services.length === 0) {
      return;
    }

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
    
    onQuoteCalculated(totals.min, totals.max);
  }, [formData, onQuoteCalculated]);

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={toggleExpand}
        className="w-full flex items-center justify-between text-left text-gold text-xl font-light mb-2 focus:outline-none hover:text-gold/80 transition-colors"
      >
        <span>Get Your Quote</span>
        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <form onSubmit={calculateQuote} className="space-y-6 text-white">
      <div className="space-y-1">
        <label htmlFor="boatLength" className="block text-sm font-light text-white/90">
          Boat Length (ft)
        </label>
        <input
          type="number"
          id="boatLength"
          value={formData.boatLength || ''}
          onChange={(e) => setFormData(prev => ({ ...prev, boatLength: Number(e.target.value) }))}
          className="w-full bg-black/20 border border-gold/20 rounded-lg py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
          min="0"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-light text-white/90 mb-3">Services</label>
        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div 
              key={service.name} 
              className="p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors group"
            >
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id={service.name}
                  checked={formData.services.includes(service.name)}
                  onChange={() => handleServiceChange(service.name)}
                  className="mt-1 h-4 w-4 text-gold focus:ring-gold border-gray-400 rounded bg-black/30"
                />
                <label htmlFor={service.name} className="ml-3 flex-1 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h4 className="text-gold text-lg font-light">{service.name}</h4>
                    <span className="text-white/90 font-light ml-2 whitespace-nowrap">
                      {service.perFoot 
                        ? `$${service.priceMin}–$${service.priceMax}/ft`
                        : `$${service.priceMin}–$${service.priceMax}`}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm font-light mt-1">{service.description}</p>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-light text-white/90 mb-3">Contact Information</label>
        <div className="space-y-4">
          <div className="border border-gold/20 rounded-lg p-4 hover:border-gold/40 transition-colors">
            <label className="block text-sm font-light text-white/90 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-0 p-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              value={formData.contact.name}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, name: e.target.value } }))}
              required
            />
          </div>
          <div className="border border-gold/20 rounded-lg p-4 hover:border-gold/40 transition-colors">
            <label className="block text-sm font-light text-white/90 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full bg-transparent border-0 p-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              value={formData.contact.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))}
              required
            />
          </div>
          <div className="border border-gold/20 rounded-lg p-4 hover:border-gold/40 transition-colors">
            <label className="block text-sm font-light text-white/90 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full bg-transparent border-0 p-0 text-white placeholder-gray-400 focus:outline-none focus:ring-0"
              value={formData.contact.email}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))}
              required
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gold text-black hover:bg-gold/90 py-3 text-base font-light tracking-wider transition-colors mt-6"
      >
        Get Quote
      </Button>
    </form>
  </div>
</div>
  );
}
