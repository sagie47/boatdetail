# Google Ads Conversion Setup

This repo now supports two implementation paths at the same time:

- `dataLayer` events for Google Tag Manager
- optional direct Google Ads conversion events through `gtag.js`

The code path is already wired in the site. What remains is deployment plus account/container configuration.

## What The Site Emits

The site now emits these custom events:

- `quote_request_submitted`
- `contact_request_submitted`
- `phone_click`
- `booking_click`
- `quote_request_failed`
- `contact_request_failed`

These are fired from:

- quote calculator form
- contact lead form
- tracked call links
- tracked booking links

## Environment Variables

Set these in the production environment before expecting direct Google Ads conversions to fire:

```env
NEXT_PUBLIC_GOOGLE_TAG_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=
NEXT_PUBLIC_GOOGLE_ADS_QUOTE_SUBMIT_LABEL=
NEXT_PUBLIC_GOOGLE_ADS_CONTACT_SUBMIT_LABEL=
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CLICK_LABEL=
NEXT_PUBLIC_GOOGLE_ADS_BOOKING_CLICK_LABEL=
```

Notes:

- `NEXT_PUBLIC_GOOGLE_TAG_ID` is the Google tag ID in `AW-XXXXXXXXXX` format.
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` is the numeric Ads conversion ID without the `AW-` prefix.
- Each `*_LABEL` value comes from the matching Google Ads conversion action under `Goals > Conversions > Tag setup`.

## GTM Container Requirements

The site already loads GTM container `GTM-54WTH2MC`.

In that container, create or confirm:

- one `Conversion Linker` tag firing on all pages
- one `Google Ads Conversion Tracking` tag per conversion action
- one `Custom Event` trigger per site event

Recommended trigger mapping:

- `quote_request_submitted` -> `Quote Request`
- `contact_request_submitted` -> `Contact Request`
- `phone_click` -> `Phone Click`
- `booking_click` -> `Book Online Click`

Recommended value variables:

- `quote_request_submitted`: use `estimate_max` from the event payload as conversion value
- `contact_request_submitted`: use a fixed lead value if no better value model exists
- `phone_click` and `booking_click`: use a nominal value unless/until offline revenue data is connected

## Direct Google Tag Support

If `NEXT_PUBLIC_GOOGLE_TAG_ID` plus the Ads conversion env vars are present, the site will also fire direct Ads conversion events with `gtag`.

For lead forms, the implementation sends:

- normalized `email`
- normalized `phone_number`

This aligns with Google Ads enhanced conversion guidance for lead forms.

## Recommended Account Setup

Create or confirm these conversion actions in Google Ads:

- `Quote Request`
- `Contact Request`
- `Phone Click`
- `Book Online Click`

Recommended defaults:

- primary for `Quote Request` and `Contact Request`
- secondary or carefully-valued for click-only actions until lead quality is understood
- `Count`: `One`
- attribution window: use your account default unless there is a reason to shorten it

## Validation Checklist

After deployment:

1. Open GTM preview mode.
2. Submit the quote form.
3. Submit the contact form.
4. Click a phone link.
5. Click a booking link.
6. Confirm the expected custom events appear in preview.
7. Confirm the Google Ads conversion tags fire on the matching events.
8. In Google Ads, check `Goals > Conversions > Diagnostics` after data starts arriving.

## Important Limitation

Enhanced conversions for leads become materially more valuable once offline outcomes are imported back into Google Ads or Data Manager. Website conversion events alone improve signal quality, but the full closed-loop setup still requires CRM or offline conversion import work outside this repo.
