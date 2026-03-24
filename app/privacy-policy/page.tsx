import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import BookingLink from "@/components/tracking/BookingLink";
import CallLink from "@/components/tracking/CallLink";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="Boat in marina with privacy policy"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                PRIVACY <span className="text-gold">POLICY</span>
              </h1>
              <p className="font-light tracking-wide text-white/90 md:text-lg max-w-2xl">
                At Kelowna Boat Detailing, we value transparency and the protection of your personal information
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12 text-gray-700 font-light">
              <div>
                <p className="leading-relaxed mb-6">
                  At Kelowna Boat Detailing, your privacy is important to us. This Privacy Policy explains what information we collect, 
                  how we use it, and your rights regarding your information. By using our services, you agree to the terms outlined in this policy.
                </p>
              </div>
              
              <div>
                <h2 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">Information We Collect</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Personal Identification Information:</span> We collect information such as your name, email address, phone number, and address when you fill out forms on our website, make a booking, or contact us for a quote.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Booking Information:</span> When you book our services, we collect details about your boat, preferred service packages, scheduling preferences, and service location.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Payment Information:</span> For transactions, we collect payment details, though we do not store complete credit card information on our servers.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Usage Data:</span> We automatically collect information about how you interact with our website, including pages visited, time spent, browser type, and device information.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">How We Use Your Information</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Provide Services:</span> To process your bookings, deliver our boat detailing services, and respond to your inquiries or requests.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Improve Our Services:</span> To analyze how our website is used, troubleshoot issues, and enhance the user experience.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Communication:</span> To send you service confirmations, updates, and promotional content about our services (with your consent, where required by law).
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Legal Compliance:</span> To comply with applicable laws, regulations, and legal processes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">Sharing Your Information</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    We value your privacy and are committed to protecting your personal information. We do not sell, rent, or trade your personal data to third parties for their marketing purposes. However, we may share your information in the following circumstances:
                  </p>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Service Providers:</span> We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Legal Requirements:</span> We may disclose your information when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Business Transfers:</span> If our company is acquired or merged with another company, your information may be transferred to the new owners.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">Your Rights</h2>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Access and Review:</span> You may request access to the personal information we hold about you.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Correction:</span> You may request that we correct inaccurate or incomplete information about you.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Deletion:</span> In certain circumstances, you may request that we delete your personal information.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 bg-gold/40 rounded-full"></div>
                    <p className="flex-1">
                      <span className="font-medium">Marketing Opt-Out:</span> You may opt out of receiving marketing communications from us at any time.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">Changes to This Policy</h2>
                <p className="leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
                <p className="leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>

              <div>
                <h2 className="font-playfair text-2xl font-light mb-6 pb-2 border-b border-gold/20">Contact Us</h2>
                <p className="leading-relaxed mb-6">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gold" />
                    <span>Email: <a href={siteConfig.emailHref} className="text-gold hover:underline">{siteConfig.email}</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gold" />
                    <span>Phone: <CallLink placement="privacy_policy" className="text-gold hover:underline">{siteConfig.phoneDisplay}</CallLink></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span>Address: Kelowna, BC, Canada</span>
                  </div>
                </div>
                <p className="mt-8 text-sm text-gray-500">
                  Last updated: April 18, {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-action */}
        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready to Make Waves with a Clean Boat?
            </h2>
            <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90">
              <BookingLink placement="privacy_policy_footer_cta">BOOK MY DETAIL</BookingLink>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
