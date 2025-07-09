// This is a server component
import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Kelowna Boat Detailing | Premium Mobile Boat Detailing in the Okanagan",
    template: "%s | Kelowna Boat Detailing"
  },
  description:
    "Luxury mobile boat detailing services in Kelowna and the Okanagan. From family pontoons to high-performance wakeboats, we bring showroom shine dockside.",
  generator: 'Next.js',
  keywords: ["boat detailing", "marine detailing", "Kelowna boat cleaning", "Okanagan boat services", "mobile boat detailing"],
  authors: [{ name: "Kelowna Boat Detailing" }],
  creator: "Kelowna Boat Detailing",
  publisher: "Kelowna Boat Detailing",
  metadataBase: new URL('https://kelownaboatdetailing.com'),
  openGraph: {
    title: "Kelowna Boat Detailing | Premium Mobile Boat Detailing",
    description: "Luxury mobile boat detailing services in Kelowna and the Okanagan.",
    url: "https://kelownaboatdetailing.com",
    siteName: "Kelowna Boat Detailing",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Kelowna Boat Detailing Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelowna Boat Detailing | Premium Mobile Boat Detailing",
    description: "Luxury mobile boat detailing services in Kelowna and the Okanagan.",
    images: ["/images/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-54WTH2MC');`}</script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54WTH2MC"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kelowna Boat Detailing",
              "image": "https://kelownaboatdetailing.com/images/logo.png",
              "@id": "https://kelownaboatdetailing.com",
              "url": "https://kelownaboatdetailing.com",
              "telephone": "+1-250-555-0199",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Boat Launch Ave",
                "addressLocality": "Kelowna",
                "addressRegion": "BC",
                "postalCode": "V1Y 7P4",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.8880,
                "longitude": -119.4960
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.instagram.com/kelownaboatdetailing"
              ],
              "servesCuisine": "",
              "description": "Luxury mobile boat detailing services in Kelowna and the Okanagan. From family pontoons to high-performance wakeboats, we bring showroom shine dockside.",
              "hasOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basic Exterior Wash",
                    "description": "Includes foam cannon presoak, hand wash with marine-grade shampoo, water spot removal, and spray wax application."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Interior Basic Clean",
                    "description": "Includes vacuuming carpets and upholstery, wiping down hard surfaces, and cleaning windows and mirrors."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Exterior & Interior Detail Package",
                    "description": "A comprehensive package including complete oxidation removal, ceramic spray sealant, and a full interior deep clean."
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
