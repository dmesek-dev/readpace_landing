# Website analytics

The site measures two things: how many people visit, and how many press a store button. It uses Firebase Analytics, which is Google Analytics 4 with a Firebase SDK in front of it — the numbers land in a GA4 property, and the Firebase console is a second view onto the same data.

Nothing is measured until the environment variables below are set. Without them the Firebase SDK is never downloaded and every analytics call is a no-op, which is the intended state for local development and preview deployments.

## What you need to do

### 1. Create the Firebase project and web app

1. [Firebase console](https://console.firebase.google.com/) → **Add project**. Name it `readpace` (or reuse the mobile app's project — see the note at the end).
2. On the Google Analytics step, **enable it** and either create a new Analytics account or pick your existing one. Analytics must be on; without it there is no `measurementId` and no data.
3. Inside the project → **Add app** → **Web** (the `</>` icon). Nickname it `readpace.org`. You do not need Firebase Hosting.
4. Copy the printed config object. You can always find it again at **Project settings → General → Your apps**.

### 2. Put the config into the environment

Copy `.env.example` to `.env.local` and fill in the seven values from that config object:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIza…
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=readpace.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=readpace
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=readpace.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

These are public by design — they identify the project in the browser and are not credentials. `.env.local` is gitignored regardless.

Then add the same seven variables to the hosting provider. On Vercel: **Project → Settings → Environment Variables**, scope them to **Production** only so preview deployments stay out of the numbers, and redeploy — `NEXT_PUBLIC_*` values are baked in at build time, so an existing deployment will not pick them up.

### 3. Register the two custom dimensions in GA4

The `store_click` event carries a `store` parameter (`app_store` or `google_play`) and a `link_url`. GA4 collects unregistered parameters but will not show them in reports until you declare them:

**GA4 → Admin → Custom definitions → Create custom dimension**, scope **Event**:

| Dimension name | Event parameter |
| --- | --- |
| Store | `store` |
| Store link URL | `link_url` |

Do this early: registration is not retroactive, so anything clicked before you add them is counted as a `store_click` but cannot be split by storefront.

### 4. Set the store URLs

`stores.appStore` and `stores.googlePlay` in `content/site.ts` are still `null`, which renders the badges as non-clickable "coming soon" chips. **No `store_click` event can fire until real URLs are in there.** That is the single most likely reason for the event never appearing.

### 5. Verify

1. Deploy, then open readpace.org in a normal (non-incognito, no ad-blocker) window.
2. **GA4 → Reports → Realtime** should show you within about 30 seconds.
3. Press a store badge. `store_click` appears in the Realtime event list — the store opens in a new tab, so the page stays put.
4. Firebase console → **Analytics → Dashboard** shows the same data, though it lags by up to 24 hours.

Ad blockers stop Firebase Analytics entirely, so expect a real-world undercount somewhere in the 10–30 % range. If you want numbers nobody can block, server-side hosting logs or a self-hosted analytics tool are the alternative.

## Where to read the answers

| Question | Where |
| --- | --- |
| How many visits? | GA4 → Reports → Life cycle → Engagement → **Pages and screens** (views per page) |
| How many store clicks? | GA4 → Reports → Engagement → **Events**, row `store_click` |
| iOS vs Android split | Explore → free-form report, dimension **Store**, metric **Event count**, filtered to `store_click` |
| Which page drives clicks? | Explore → dimensions **Page path** + **Event name** |
| Where visitors come from | Reports → Acquisition → Traffic acquisition |

Mark the conversion if you want it treated as a goal: **Admin → Events → `store_click` → Mark as key event**.

## Privacy and consent

Consent Mode v2 is set to `denied` for analytics and all advertising storage *before* Analytics initialises. In practice:

- No analytics cookie and no advertising cookie is written.
- Google receives cookieless pings. Page views and events are counted; a returning visitor is not recognised as the same person, so *users* and *sessions* are modelled estimates while *views* and *event counts* are solid.
- Nothing is shared with Google Ads, and no advertising identifier is collected.

This is why there is no cookie banner. It is the conservative reading of GDPR/ePrivacy for a site that only needs traffic counts. If you later want full measurement — returning users, real sessions, attribution — you need actual consent:

1. Build a banner component.
2. Call `grantAnalyticsConsent()` from `lib/analytics.ts` when the visitor accepts, and `denyAnalyticsConsent()` if they withdraw.
3. Persist the choice (a `localStorage` flag) and call `grantAnalyticsConsent()` before `initAnalytics()` on subsequent loads so the grant lands as the gtag *default* rather than an update.
4. Update the "This website" section of `app/privacy/page.tsx`, which currently states that no identifier is stored.

Have a lawyer look at the privacy page before the store listings go live, as noted in that file's header comment.

## Adding more events

`track()` in `lib/analytics.ts` takes any GA4 event name plus flat parameters. From a client component:

```tsx
"use client";
import { track } from "@/lib/analytics";

<button onClick={() => track("test_finished", { wpm: 312 })}>…</button>;
```

Use `snake_case` names, keep parameters flat and primitive, and register any new parameter as a custom dimension (step 3) before expecting it in reports. `docs/seo-launch.md` suggests test started / test finished / result viewed as the next useful set. Never send raw quiz answers or scanned book text.

## Sharing the project with the mobile app

If ReadPace's iOS and Android apps use their own Firebase project, keeping the website in the same project is worth it: one GA4 property then covers "visited the site" through "installed the app", and the funnel is visible in one place. Add the web app to the existing project instead of creating a new one — the config values in step 2 are then taken from that project.

## Implementation map

| File | Role |
| --- | --- |
| `lib/analytics.ts` | Lazy, consent-gated SDK init; `track`, `trackPageView`, consent helpers |
| `components/Analytics.tsx` | Mounted in the root layout; starts Analytics and follows route changes |
| `components/StoreLink.tsx` | Client anchor that fires `store_click` |
| `components/StoreBadges.tsx` | Renders the badges, server-side, around that anchor |
| `.env.example` | The seven variables to fill in |
