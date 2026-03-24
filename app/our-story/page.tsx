import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import BookingLink from "@/components/tracking/BookingLink";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description:
    "Learn how Kelowna Boat Detailing built a reputation for premium mobile boat detailing across Kelowna and the Okanagan Valley.",
  path: "/our-story",
});

export default function OurStory() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="The Kelowna Boat Detailing story"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                OUR <span className="text-gold">STORY</span>
              </h1>
              <p className="max-w-2xl font-light tracking-wide text-white/90 md:text-lg">
                From passionate boaters to premium detailing specialists
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-16">
              <div className="grid items-center gap-8">
                <div>
                  <h2 className="mb-6 border-b border-gold/20 pb-2 font-playfair text-3xl font-light">
                    How We Started
                  </h2>
                  <div className="prose space-y-4 font-light text-gray-700">
                    <p>
                      Welcome to Kelowna Boat Detailing - where your vessel gets the
                      care it deserves.
                    </p>
                    <p>
                      Whether your boat needs a full detail, oxidation removal, or
                      just a deep clean after a season on Okanagan Lake, we&apos;ve got
                      you covered. We specialize in professional, high-quality
                      detailing services that keep your boat looking its best and
                      performing at its peak.
                    </p>
                    <p>
                      With years of hands-on experience, our team knows how to
                      handle everything from interior deep cleans to gelcoat
                      restoration. We work on all types of boats and understand the
                      unique demands of the local climate and waters.
                    </p>
                    <p>
                      Proudly serving Kelowna and the surrounding area, we&apos;ve
                      earned a reputation for reliable, meticulous work and
                      customer-first service. No job is too big or small - from
                      quick spruce-ups to full-service details, we treat every boat
                      like it&apos;s our own.
                    </p>
                    <p>Book your detail today and get back on the water looking sharp.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-8">
                <h2 className="mb-6 text-center font-playfair text-3xl font-light">
                  Our Mission
                </h2>
                <p className="mx-auto max-w-2xl text-center text-xl font-light text-gray-700">
                  &quot;To provide the highest quality boat detailing services while
                  exceeding customer expectations through attention to detail,
                  technical expertise, and exceptional customer service.&quot;
                </p>
              </div>

              <div>
                <h2 className="mb-8 border-b border-gold/20 pb-2 font-playfair text-3xl font-light">
                  Our Core Values
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-light">Excellence</h3>
                      <p className="font-light text-gray-700">
                        We strive for excellence in every detail, ensuring each boat
                        receives meticulous attention and the highest quality care.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-light">Integrity</h3>
                      <p className="font-light text-gray-700">
                        We operate with complete transparency, honesty, and ethical
                        standards in all our business practices.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-light">Innovation</h3>
                      <p className="font-light text-gray-700">
                        We continuously seek the latest products, techniques, and
                        technologies to deliver superior results.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-light">Sustainability</h3>
                      <p className="font-light text-gray-700">
                        We are committed to using environmentally friendly products
                        and practices that protect our beautiful Okanagan waterways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready to Experience the Kelowna Boat Detailing Difference?
            </h2>
            <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90">
              <BookingLink placement="our_story_footer_cta">BOOK A DETAIL</BookingLink>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
