// This is a server component
import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { serviceCatalog } from "@/lib/serviceCatalog";
import { absoluteUrl, siteConfig } from "@/lib/site";

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
    default: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.defaultDescription,
  generator: 'Next.js',
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/images/logo.png"),
        width: 800,
        height: 600,
        alt: `${siteConfig.name} logo`,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    images: [absoluteUrl("/images/logo.png")],
  },
}

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

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
        {googleTagId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${googleTagId}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
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
              "@type": "ProfessionalService",
              "@id": siteConfig.url,
              "name": siteConfig.name,
              "url": siteConfig.url,
              "image": absoluteUrl("/images/logo.png"),
              "telephone": siteConfig.phoneIntl,
              "email": siteConfig.email,
              "priceRange": "$$",
              "areaServed": siteConfig.serviceAreas.map((area) => ({
                "@type": "City",
                "name": area,
              })),
              "sameAs": [
                siteConfig.instagramUrl
              ],
              "description": siteConfig.defaultDescription,
              "serviceType": [
                "Mobile boat detailing",
                "Boat oxidation removal",
                "Boat ceramic coating",
                "Interior boat detailing",
                "Exterior boat detailing"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": siteConfig.phoneIntl,
                "email": siteConfig.email,
                "contactType": "customer service",
                "areaServed": "CA",
                "availableLanguage": "English"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Boat detailing services",
                "itemListElement": serviceCatalog.map((service) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                  }
                }))
              }
            })
          }}
        />
      </body>
    </html>
  )
}
