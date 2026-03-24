# Kelowna Boat Detailing Max-Cash Website Brief

## Goal

Maximize booked revenue between March 24, 2026 and May 24, 2026.

This is not a generic brand refresh. The site should behave like a short-window cash engine for high-ticket services:

- Full Detail Package
- Oxidation Removal & Gelcoat Polish
- premium interior/exterior reset work

The website should reduce friction for serious buyers, increase phone calls and quote requests, and stop spending attention on low-value browsing.

## Current Site Reality

The current build is clean and functional, but it still reads like a broad brochure instead of a high-intent local service funnel.

Relevant files in the current app:

- [components/sections/HeroSection.tsx](/C:/Users/ASUS/boatdetail/components/sections/HeroSection.tsx)
- [components/sections/Stats.tsx](/C:/Users/ASUS/boatdetail/components/sections/Stats.tsx)
- [components/sections/QuoteCalculator.tsx](/C:/Users/ASUS/boatdetail/components/sections/QuoteCalculator.tsx)
- [components/sections/Testimonials.tsx](/C:/Users/ASUS/boatdetail/components/sections/Testimonials.tsx)
- [components/HomeView.tsx](/C:/Users/ASUS/boatdetail/components/HomeView.tsx)
- [app/pricing/page.tsx](/C:/Users/ASUS/boatdetail/app/pricing/page.tsx)
- [app/services/page.tsx](/C:/Users/ASUS/boatdetail/app/services/page.tsx)
- [lib/serviceCatalog.ts](/C:/Users/ASUS/boatdetail/lib/serviceCatalog.ts)

## What Needs To Change

### 1. Hero should sell premium work, not generic convenience

Current hero:

- headline: `YOUR BOAT, BUT BETTER.`
- subhead: mobile detailing in Kelowna and the Okanagan
- CTAs: `GET A FREE QUOTE` and `BOOK ONLINE`

Problem:

- the message is broad and soft
- it does not lead with the highest-value jobs
- it does not tell the user what kind of boat owner this is for
- it does not create urgency for spring launch prep

Design direction:

- keep the black / gold premium feel
- move to a stronger offer-driven hero
- emphasize `Full Detail`, `Oxidation Removal`, `Mobile Dockside Service`, `Fast Quote`
- add one proof module directly in the hero, not below the fold

Suggested hero structure:

- headline: `Full Boat Detailing In Kelowna`
- subhead: `Mobile full-detail, oxidation removal, and gelcoat polishing for owners who want their boat ready before peak season.`
- proof row:
  - `Kelowna + West Kelowna mobile service`
  - `Fast quote response`
  - `Google-reviewed local operator`
- primary CTA: `Get Fast Quote`
- secondary CTA: `Call Or Text Now`
- tertiary text link: `See Pricing`

### 2. Homepage needs a dedicated high-ticket section above the current service sprawl

Current homepage flow in [components/HomeView.tsx](/C:/Users/ASUS/boatdetail/components/HomeView.tsx):

- hero
- stats
- generic headline
- service highlights
- professional washing
- pricing
- quote calculator
- testimonials
- gallery

Problem:

- too much broad exploration before the visitor sees the money services
- high-value work is not isolated as the default buying path
- the visitor can browse for too long without choosing a job type

Recommended section immediately below hero:

- title: `Most Requested Spring Services`
- three visual cards:
  - `Full Detail Package`
  - `Oxidation Removal & Gelcoat Polish`
  - `Interior Deep Clean & Upholstery Care`
- each card should show:
  - short outcome-focused description
  - `from` price or price range
  - ideal customer / use case
  - CTA: `Get Quote For This`

This should sit above the current broader service sections.

### 3. Quote flow should feel like a serious-service intake, not just a calculator

Current quote section in [components/sections/QuoteCalculator.tsx](/C:/Users/ASUS/boatdetail/components/sections/QuoteCalculator.tsx):

- good structure
- strong estimate reveal
- good call/text and booking CTAs

Problem:

- the section still presents every service equally
- it does not frame the estimate as a serious buying step
- it does not build enough confidence around response speed and next steps

Design changes:

- add a compact `What happens next` block beside or above the form
- add expected response window copy
- add a stronger reason to submit the quote before calling:
  - `Get a fast estimate and we’ll confirm the final scope by condition`
- visually prioritize these service defaults:
  - full detail
  - oxidation
  - interior deep clean
- make low-ticket wash feel secondary

Suggested microcopy:

- `1. Choose your boat length and service level`
- `2. Get an estimate instantly`
- `3. We confirm scope and schedule your detail`

### 4. Pricing page needs sharper packaging, less visual sameness

The pricing structure in [lib/serviceCatalog.ts](/C:/Users/ASUS/boatdetail/lib/serviceCatalog.ts) is already much better than before. The design now needs to make the premium ladder obvious.

Priority visual grouping:

- `Best Seller`
  - Full Detail Package
- `High Margin / High Intent`
  - Oxidation Removal & Gelcoat Polish
  - True Ceramic Coating
- `Entry / Add-On`
  - Exterior Wash + Spray Protection
  - Hybrid Ceramic Spray Sealant
  - Engine Bay Cleaning

Recommended design changes:

- different card sizes for flagship vs support services
- stronger color treatment for the `Full Detail Package`
- show ideal use cases, not just features
- show `good / better / premium` visual hierarchy
- add one comparison table:
  - wash vs full detail vs oxidation vs ceramic

### 5. Social proof should move closer to decision points

Current testimonials are fine, but they are too low in the flow and too generic.

Recommended changes:

- move at least one testimonial or review badge into the hero / quote area
- add a `before / after` proof strip near pricing or services
- use proof specific to:
  - oxidation correction
  - full interior/exterior reset
  - ceramic or finish restoration

If possible, replace generic portrait cards with:

- boat photo
- job type
- owner quote
- service result

### 6. Gallery should do selling, not just showing

The gallery should help sell expensive work.

Recommended design pattern:

- sort gallery by service type, not just image wall
- featured tabs:
  - `Oxidation Correction`
  - `Full Detail`
  - `Interior Reset`
  - `Ceramic Finish`
- each featured case should include:
  - before image
  - after image
  - boat type
  - scope
  - quote CTA

### 7. Mobile CTA behavior should be more aggressive

For the next 60 days, mobile visitors should not have to hunt for the next step.

Recommended mobile behavior:

- sticky bottom CTA bar
  - `Call / Text`
  - `Get Quote`
- keep `Book Online` available, but behind the stronger direct-response actions
- persistent proof line under sticky CTA:
  - `Kelowna mobile service`

### 8. Remove brochure-style distractions from the main sales path

Lower-priority browsing content should stop competing with conversion.

Examples:

- `About Us`
- general lifestyle copy
- broad non-urgent exploration

These pages can stay in the site, but the homepage and pricing pages should stop giving them visual priority.

## Proposed Design Tickets

### P0: Homepage conversion pass

- rewrite hero around high-ticket service intent
- add proof row above the fold
- add `Most Requested Spring Services` section above the broader service modules
- add sticky mobile CTA
- add one testimonial or review proof near the hero/quote area

### P0: Quote section redesign

- convert the calculator into a stronger intake module
- add next-step explainer
- increase visual emphasis on full detail and oxidation
- improve estimate reveal card styling

### P1: Pricing page redesign

- regroup services into flagship / premium / support categories
- add comparison table
- highlight the Full Detail Package as the default choice
- reduce visual repetition between service cards

### P1: Proof system

- add before/after modules
- add result-based gallery organization
- add job-type-specific testimonials

### P2: Dedicated landing pages

If design bandwidth exists, create dedicated layouts for:

- `/pricing`
- `/services`
- future `oxidation` service page
- future `full-detail` landing page

These should be built to align tightly with Search ads and high-intent traffic.

## Suggested Visual Direction

Keep the existing premium black / gold language, but make it more decisive.

Wanted:

- more contrast between flagship and secondary offers
- less brochure symmetry
- stronger local-service urgency
- more service-result photography
- cleaner price anchoring
- less generic luxury language

Avoid:

- abstract brand-only refreshes
- oversized lifestyle sections with weak buying intent
- equal visual weight for every service
- hiding pricing and proof too far down the page

## Suggested Copy Direction

Use outcome-driven local service copy, not vague polish.

Examples:

- `Full Boat Detailing In Kelowna`
- `Oxidation Removal And Gelcoat Polish`
- `Mobile Dockside Service`
- `Fast Quote For Serious Boat Owners`
- `Get Your Boat Ready Before Peak Season`

Avoid generic phrases like:

- `your boat, but better`
- `ultimate convenience`
- `premium services` by itself
- `ready to make waves`

## Recommended Deliverables For Designer

- desktop homepage redesign
- mobile homepage redesign
- pricing page redesign
- quote section redesign
- sticky mobile CTA concept
- before/after proof module
- premium service comparison module

## Implementation Notes For Dev

Likely touch points once design is approved:

- [components/sections/HeroSection.tsx](/C:/Users/ASUS/boatdetail/components/sections/HeroSection.tsx)
- [components/HomeView.tsx](/C:/Users/ASUS/boatdetail/components/HomeView.tsx)
- [components/sections/QuoteCalculator.tsx](/C:/Users/ASUS/boatdetail/components/sections/QuoteCalculator.tsx)
- [components/sections/Stats.tsx](/C:/Users/ASUS/boatdetail/components/sections/Stats.tsx)
- [components/sections/Testimonials.tsx](/C:/Users/ASUS/boatdetail/components/sections/Testimonials.tsx)
- [app/pricing/page.tsx](/C:/Users/ASUS/boatdetail/app/pricing/page.tsx)
- [app/services/page.tsx](/C:/Users/ASUS/boatdetail/app/services/page.tsx)

## Success Criteria

The redesign is successful if it increases:

- phone clicks
- quote submissions
- full-detail and oxidation lead mix
- speed from landing to action

And decreases:

- low-intent browsing
- attention on low-ticket wash-first paths
- ambiguity about what to book
