export interface ServiceCatalogItem {
  slug: string;
  title: string;
  alt: string;
  image: string;
  description: string;
  priceMin: number;
  priceMax: number;
  perFoot: boolean;
  priceLabel: string;
  popular?: boolean;
  features: string[];
}

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    slug: "exterior-wash-spray-protection",
    title: "Exterior Wash + Spray Protection",
    alt: "Exterior Wash and Spray Protection",
    image: "/images/boat.png",
    description:
      "Foam cannon presoak; hand wash with marine-grade shampoo; water spot removal; quick-dry with microfiber towels; hybrid spray protection for gloss and short-term defense.",
    priceMin: 18,
    priceMax: 24,
    perFoot: true,
    priceLabel: "$18-$24/ft",
    features: [
      "Foam cannon presoak",
      "Hand wash with marine-grade shampoo",
      "Water spot removal (non-polish)",
      "Quick-dry with microfiber towels",
      "Hybrid spray protection for seasonal gloss",
    ],
  },
  {
    slug: "interior-refresh",
    title: "Interior Refresh",
    alt: "Interior Refresh",
    image: "/images/pic1.png",
    description:
      "Vacuum carpets and upholstery; wipe down hard surfaces and vinyl; clean windows and mirrors; light reset for a tidy, guest-ready interior.",
    priceMin: 14,
    priceMax: 18,
    perFoot: true,
    priceLabel: "$14-$18/ft",
    features: [
      "Vacuum carpets and upholstery",
      "Wipe down hard surfaces and vinyl",
      "Clean windows and mirrors",
      "Light dusting of vents and compartments",
    ],
  },
  {
    slug: "full-detail-package",
    title: "Full Detail Package",
    alt: "Full Detail Package",
    image: "/images/pic2.png",
    description:
      "Our signature full-boat reset with exterior correction, interior deep clean, upholstery care, and protection. Heavy oxidation and true ceramic coatings are quoted separately.",
    priceMin: 49,
    priceMax: 69,
    perFoot: true,
    priceLabel: "$49-$69/ft",
    popular: true,
    features: [
      "Exterior wash, polish, and protection",
      "Interior deep clean and upholstery conditioning",
      "Glass and chrome finished inside and out",
      "Best fit for seasonal launch prep and full resets",
    ],
  },
  {
    slug: "oxidation-removal-gelcoat-polish",
    title: "Oxidation Removal & Gelcoat Polish",
    alt: "Oxidation Removal and Gelcoat Polish",
    image: "/images/pic3.png",
    description:
      "Light oxidation correction starts at $39-$55/ft. Heavy oxidation and multi-step restoration runs $60-$79/ft depending on severity, prep time, and finish goals.",
    priceMin: 39,
    priceMax: 79,
    perFoot: true,
    priceLabel: "$39-$79/ft",
    features: [
      "Light oxidation correction: $39-$55/ft",
      "Heavy oxidation restoration: $60-$79/ft",
      "Acid wash prep if needed",
      "Rotary polishing with marine pads and compounds",
      "Protection step included after correction",
    ],
  },
  {
    slug: "hybrid-ceramic-spray-sealant",
    title: "Hybrid Ceramic Spray Sealant",
    alt: "Hybrid Ceramic Spray Sealant",
    image: "/images/pic1.png",
    description:
      "An efficient protection add-on for gloss, hydrophobic behavior, and easier maintenance between major correction or coating appointments.",
    priceMin: 8,
    priceMax: 12,
    perFoot: true,
    priceLabel: "$8-$12/ft",
    features: [
      "Hydrophobic protection and easier cleanup",
      "Ideal between full details",
      "Adds gloss and short-term UV defense",
      "Best used as an add-on after prep",
    ],
  },
  {
    slug: "true-ceramic-coating",
    title: "True Ceramic Coating",
    alt: "True Ceramic Coating",
    image: "/images/boat-polishing.png",
    description:
      "Long-duration ceramic protection for owners who want deeper gloss, stronger UV defense, and easier wash maintenance. Final pricing depends on prep and paint or gelcoat condition.",
    priceMin: 75,
    priceMax: 110,
    perFoot: true,
    priceLabel: "$75-$110/ft + prep",
    features: [
      "Long-duration ceramic protection",
      "Higher gloss and easier maintenance than waxes",
      "Prep and correction quoted based on condition",
      "Best for premium boats and long-term finish care",
    ],
  },
  {
    slug: "interior-deep-clean-upholstery-care",
    title: "Interior Deep Clean & Upholstery Care",
    alt: "Interior Deep Clean and Upholstery Care",
    image: "/images/pic2.png",
    description:
      "Deeper interior restoration with shampooing, conditioning, odor control, and stain-focused cleanup for heavily used family and surf boats.",
    priceMin: 20,
    priceMax: 30,
    perFoot: true,
    priceLabel: "$20-$30/ft",
    features: [
      "Includes Interior Refresh services",
      "Shampoo carpets and fabric seats",
      "Condition vinyl and upholstery",
      "Deodorize and sanitize interior surfaces",
    ],
  },
  {
    slug: "engine-bay-cleaning",
    title: "Engine Bay Cleaning",
    alt: "Engine Bay Cleaning",
    image: "/images/pic3.png",
    description:
      "Flat-rate engine compartment cleanup with degreasing, careful agitation, low-pressure rinse, and dressing application where appropriate.",
    priceMin: 85,
    priceMax: 175,
    perFoot: false,
    priceLabel: "$85-$175 flat",
    features: [
      "Degrease and scrub engine compartment",
      "Low-pressure rinse",
      "Plastic and rubber dressing application",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}
