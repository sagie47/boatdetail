export const siteConfig = {
  name: "Kelowna Boat Detailing",
  url: "https://kelownaboatdetailing.com",
  defaultTitle: "Premium Mobile Boat Detailing in Kelowna and the Okanagan",
  defaultDescription:
    "Premium mobile boat detailing services in Kelowna and across the Okanagan. Exterior washes, interior detailing, oxidation removal, and ceramic coating done dockside.",
  keywords: [
    "boat detailing kelowna",
    "mobile boat detailing kelowna",
    "okanagan boat detailing",
    "boat cleaning kelowna",
    "marine detailing kelowna",
    "boat oxidation removal kelowna",
    "boat ceramic coating kelowna",
  ],
  phoneDisplay: "778 363 8686",
  phoneHref: "tel:+17783638686",
  phoneIntl: "+17783638686",
  email: "info@kelownaboatdetailing.com",
  emailHref: "mailto:info@kelownaboatdetailing.com",
  instagramUrl: "https://www.instagram.com/kelownaboatdetailing/?hl=en",
  reviewUrl: "https://g.page/r/CWCCJIC_-vkWEBM/review",
  bookingUrl: "tel:+17783638686",
  serviceAreaLabel: "Serving Kelowna and the Okanagan Valley",
  serviceAreas: [
    "Kelowna",
    "West Kelowna",
    "Lake Country",
    "Peachland",
    "Vernon",
    "Penticton",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
