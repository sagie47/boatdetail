# Kelowna Boat Detailing Execution Plan (Implemented + Pending Actions)

Date: March 29, 2026  
Owner: AI-assisted implementation for website + campaign handoff  
Scope: Website code changes in `boatdetail` and operational runbook for ads/platform tasks

## Implemented in this PR
1. Fixed booking dead-end behavior for all in-site booking CTAs.
2. Added seasonal flagship offer merchandising to Homepage and Pricing pages.
3. Added deposit messaging for premium jobs in quote flow.
4. Updated `public/llms.txt` booking pointer to the working site path.
5. Preserved existing phone number as the canonical source and kept site-wide phone references on shared config.

## Files changed
1. `lib/site.ts`
2. `components/tracking/BookingLink.tsx`
3. `components/sections/SeasonalOffers.tsx`
4. `components/HomeView.tsx`
5. `components/features/QuoteForm.tsx`
6. `components/sections/QuoteCalculator.tsx`
7. `app/pricing/page.tsx`
8. `app/page.tsx`
9. `public/llms.txt`

## What changed on booking UX
1. All `BookingLink` usages now resolve through `siteConfig.bookingEnabled`.
2. Current production state is fallback-first because booking is disabled in config.
3. Fallback path is `/contact?entry=booking`, which preserves conversion intent without dead-end clicks.
4. External Square URL remains in config for re-enable later once verified.

## Next required items (manual platform actions)
1. Re-enable Square booking after validating availability.
2. Run Google Search Console URL Inspection for at least 10 top pages:
   `/, /pricing, /services, /contact, /faq, /ceramic-coating, /gallery`.
3. In GSC, submit URL re-index requests for above routes after merge deploy.
4. Keep Google Business Profile phone/name/area/service info aligned with website canonical values.
5. Split Google Ads campaign into two intent lanes: core capture and premium intent.
6. Add/clean call, lead form, and qualified-booking conversions (primary: quote/contact; secondary: raw phone/booking for validation).
7. Add Lake Country and Peachland expansions, Vernon premium-only test lanes with travel minimum.
8. Launch short April-May paid social creative campaign for Spring Launch / Oxidation / Maintenance messaging.
9. Set up one pull-out/dock/storage partner outreach sequence and track response outcomes.
10. Reactivate old leads and unclosed quotes with spring-slot messaging plus priority hold offer.

## Conversion logic target to validate after merge
1. Booking fallback path receives no 0-value drop-off from CTA traffic.
2. Top landing pages index with the current Kelowna phone number.
3. Seasonal offers report higher lead and booking click-through than generic “full detail” language.
4. Minimum 15 qualified conversion events in 30 days before moving to heavy smart bidding.
