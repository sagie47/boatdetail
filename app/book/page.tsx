import Link from "next/link";

import { CallLink } from "@/components/tracking/CallLink";
import { siteConfig } from "@/lib/site";

const setmoreBookingUrl = siteConfig.setmoreBookingUrl;
const hasSetmoreBooking = Boolean(setmoreBookingUrl);

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-black text-white">
        <div className="container px-4 py-20 md:py-24">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Setmore Booking
          </p>
          <h1 className="mt-4 max-w-3xl font-playfair text-4xl font-light sm:text-5xl md:text-6xl">
            Book your boat detail online.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light text-white/80 md:text-lg">
            Use our Setmore booking page to request a time for mobile detailing,
            oxidation removal, ceramic coating, or a spring launch cleanup. If you
            would rather book by phone, call {siteConfig.phoneDisplay}.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {hasSetmoreBooking ? (
              <a
                href={setmoreBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gold/90"
              >
                Open Setmore calendar
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gold/90"
              >
                Request a quote
              </Link>
            )}
            <CallLink
              placement="book_page_call"
              className="inline-flex items-center justify-center rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-black"
            >
              Call {siteConfig.phoneDisplay}
            </CallLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
              {hasSetmoreBooking ? (
                <>
                  <div className="border-b border-black/10 px-6 py-5">
                    <h2 className="font-playfair text-2xl font-light text-black">
                      Setmore booking calendar
                    </h2>
                    <p className="mt-2 text-sm font-light text-black/65">
                      If the embedded calendar does not load, use the button above
                      to open Setmore in a new tab.
                    </p>
                  </div>
                  <div className="p-4 md:p-6">
                    <iframe
                      src={setmoreBookingUrl}
                      title="Setmore booking calendar"
                      className="min-h-[880px] w-full rounded-2xl border border-black/10 bg-white"
                    />
                  </div>
                </>
              ) : (
                <div className="p-8 md:p-10">
                  <h2 className="font-playfair text-2xl font-light text-black">
                    Setmore is ready to connect.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm font-light leading-7 text-black/70 md:text-base">
                    Add your Setmore booking URL to the
                    <code className="mx-1 rounded bg-black/5 px-2 py-1 text-xs md:text-sm">
                      NEXT_PUBLIC_SETMORE_BOOKING_URL
                    </code>
                    environment variable and this page will switch from fallback
                    mode to the live Setmore calendar.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <CallLink
                      placement="book_page_fallback_call"
                      className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/90"
                    >
                      Call {siteConfig.phoneDisplay}
                    </CallLink>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md border border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                    >
                      Use contact form instead
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  What to book
                </p>
                <h2 className="mt-3 font-playfair text-2xl font-light text-black">
                  High-intent jobs first.
                </h2>
                <ul className="mt-4 space-y-3 text-sm font-light leading-7 text-black/70 md:text-base">
                  <li>Full detail and seasonal launch packages</li>
                  <li>Oxidation removal and gelcoat polishing</li>
                  <li>Hybrid or true ceramic protection</li>
                  <li>Dockside mobile detailing across the Okanagan</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-black/10 bg-black p-6 text-white shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Prefer to call?
                </p>
                <h2 className="mt-3 font-playfair text-2xl font-light">
                  Use the number below.
                </h2>
                <p className="mt-4 text-sm font-light leading-7 text-white/75 md:text-base">
                  Call or text for premium slots, urgent dockside work, or boats
                  that need special access planning.
                </p>
                <CallLink
                  placement="book_page_sidebar_call"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gold/90"
                >
                  {siteConfig.phoneDisplay}
                </CallLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
