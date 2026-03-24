"use client";

import Image from "next/image";
import { ChevronRight, Instagram, Mail, Star } from "lucide-react";
import { useState } from "react";

import BookingLink from "@/components/tracking/BookingLink";
import ReviewLink from "@/components/tracking/ReviewLink";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

type FeedbackFormState = {
  firstName: string;
  lastName: string;
  email: string;
  serviceDate: string;
  service: string;
  crewMember: string;
  feedback: string;
  publishConsent: boolean;
};

const INITIAL_STATE: FeedbackFormState = {
  firstName: "",
  lastName: "",
  email: "",
  serviceDate: "",
  service: "",
  crewMember: "",
  feedback: "",
  publishConsent: false,
};

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formState, setFormState] = useState(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (rating === 0) {
      setSubmitState("error");
      setMessage("Please choose a rating before submitting feedback.");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");
    setMessage("");

    try {
      const response = await fetch("/api/leads/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          rating,
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            "We couldn't submit your feedback right now. Please use Google Reviews instead."
        );
      }

      trackEvent("feedback_submitted", {
        rating,
        publish_consent: formState.publishConsent,
      });
      setSubmitState("success");
      setMessage(
        "Thanks for the feedback. If you're happy to share it publicly too, the Google Reviews link on this page is the fastest path."
      );
      setFormState(INITIAL_STATE);
      setRating(0);
    } catch (error) {
      trackEvent("feedback_failed", {
        rating,
      });
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit your feedback right now. Please use Google Reviews instead."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-boat.webp"
              alt="Feedback for Kelowna Boat Detailing"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 py-24 md:py-32">
            <div className="grid gap-4">
              <h1 className="font-playfair text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                SHARE YOUR <span className="text-gold">FEEDBACK</span>
              </h1>
              <p className="max-w-2xl font-light tracking-wide text-white/90 md:text-lg">
                Help us improve our service by sharing your experience with Kelowna
                Boat Detailing.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-5">
              <div className="md:col-span-3">
                <h2 className="mb-8 border-b border-gold/20 pb-2 font-playfair text-3xl font-light">
                  Submit Your Feedback
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="mb-1 block text-sm font-light text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        required
                        value={formState.firstName}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            firstName: event.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="mb-1 block text-sm font-light text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        value={formState.lastName}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            lastName: event.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-light text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          email: event.target.value,
                        }))
                      }
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service-date"
                      className="mb-1 block text-sm font-light text-gray-700"
                    >
                      Service Date
                    </label>
                    <input
                      type="date"
                      id="service-date"
                      value={formState.serviceDate}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          serviceDate: event.target.value,
                        }))
                      }
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1 block text-sm font-light text-gray-700"
                    >
                      Service Received
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          service: event.target.value,
                        }))
                      }
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                    >
                      <option value="">Select the service you received</option>
                      <option value="Exterior Wash and Dry">Exterior Wash and Dry</option>
                      <option value="Interior Detail">Interior Detail</option>
                      <option value="Full Detail Package">Full Detail Package</option>
                      <option value="Oxidation Removal and Gelcoat Polish">
                        Oxidation Removal and Gelcoat Polish
                      </option>
                      <option value="Seasonal Prep Package">Seasonal Prep Package</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <p className="mb-3 block text-sm font-light text-gray-700">
                      Overall Satisfaction
                    </p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-8 w-8 cursor-pointer transition-colors ${
                            (hoverRating || rating) >= star
                              ? "fill-gold text-gold"
                              : "text-gray-300"
                          }`}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="crew-member"
                      className="mb-1 block text-sm font-light text-gray-700"
                    >
                      Crew Member (if known)
                    </label>
                    <input
                      type="text"
                      id="crew-member"
                      value={formState.crewMember}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          crewMember: event.target.value,
                        }))
                      }
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                      placeholder="Name of crew member who performed the service"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="feedback"
                      className="mb-1 block text-sm font-light text-gray-700"
                    >
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows={5}
                      required
                      value={formState.feedback}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          feedback: event.target.value,
                        }))
                      }
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                      placeholder="Please share your thoughts about our service. What did you like? What could we improve?"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formState.publishConsent}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            publishConsent: event.target.checked,
                          }))
                        }
                        className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold/50"
                      />
                      <span className="text-sm text-gray-600">
                        I consent to having my feedback published as a testimonial
                        (your email will never be published)
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold text-black hover:bg-gold/90 md:w-auto"
                    >
                      {isSubmitting ? "Submitting..." : "SUBMIT FEEDBACK"}
                    </Button>
                    {message ? (
                      <div
                        className={`rounded-lg px-4 py-3 text-sm ${
                          submitState === "success"
                            ? "bg-green-50 text-green-800"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        {message}
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>

              <div className="md:col-span-2">
                <div className="mb-8 rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-light">Why Your Feedback Matters</h3>
                  <p className="mb-4 font-light text-gray-600">
                    At Kelowna Boat Detailing, we&apos;re committed to providing the
                    highest quality service. Your feedback helps us:
                  </p>
                  <ul className="space-y-2 font-light text-gray-600">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-gold" />
                      <span>Recognize outstanding crew members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-gold" />
                      <span>Identify areas for improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-gold" />
                      <span>Enhance our services to better meet your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-gold" />
                      <span>Train our team members more effectively</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-black p-6 text-white">
                  <h3 className="mb-4 text-xl font-light text-gold">Other Ways to Share</h3>
                  <p className="mb-4 font-light text-white/80">
                    We appreciate your feedback on these channels too:
                  </p>
                  <ul className="space-y-4">
                    <li>
                      <ReviewLink
                        placement="feedback_page"
                        className="flex items-center gap-3 text-white transition-colors hover:text-gold/90"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white">
                          <span className="text-sm font-medium text-black">G</span>
                        </div>
                        <span>Google Reviews</span>
                      </ReviewLink>
                    </li>
                    <li>
                      <a
                        href={siteConfig.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white transition-colors hover:text-gold/90"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.emailHref}
                        className="flex items-center gap-3 text-white transition-colors hover:text-gold/90"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Email Feedback</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="container px-4 text-center">
            <h2 className="mb-8 font-playfair text-3xl font-light text-white">
              Ready to Experience the Kelowna Difference?
            </h2>
            <BookingLink placement="feedback_footer_cta">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
                BOOK A DETAIL
              </Button>
            </BookingLink>
          </div>
        </section>
      </main>
    </div>
  );
}
