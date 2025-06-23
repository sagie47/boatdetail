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
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
