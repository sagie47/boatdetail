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
  phoneDisplay: "+1 (778) 581-2947",
  phoneHref: "tel:+17785812947",
  phoneIntl: "+17785812947",
  email: "info@kelownaboatdetailing.com",
  emailHref: "mailto:info@kelownaboatdetailing.com",
  instagramUrl: "https://www.instagram.com/kelownaboatdetailing/?hl=en",
  bookingUrl: "https://app.squareup.com/appointments/buyer/widget/aja9n9y3sjp8vy/LJBQ126WXZDTP",
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
