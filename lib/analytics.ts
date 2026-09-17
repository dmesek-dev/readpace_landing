/**
 * Firebase Analytics (GA4) for the website.
 *
 * Three deliberate properties:
 *
 *  1. **Optional.** With no `NEXT_PUBLIC_FIREBASE_*` environment variables the
 *     module is inert — every call is a no-op and the SDK is never downloaded.
 *     Local development and preview builds stay out of the numbers by default.
 *  2. **Lazy.** `firebase/app` and `firebase/analytics` are dynamically
 *     imported after hydration, so they never sit in the critical path of a
 *     statically rendered marketing page.
 *  3. **Consent-gated.** Consent Mode v2 defaults are set to `denied` *before*
 *     Analytics initialises, so no analytics or advertising cookie is written.
 *     Google still receives cookieless pings, which is enough for page and
 *     event counts, and not enough to identify a returning visitor. Call
 *     `grantAnalyticsConsent()` from a consent banner to upgrade.
 *
 * Nothing here collects anything a visitor types: only the path they are on
 * and which call-to-action they pressed.
 */

import type { Analytics } from "firebase/analytics";

/**
 * Read as separate, statically analysable property accesses — Next.js inlines
 * `process.env.NEXT_PUBLIC_*` at build time and cannot do that through a
 * computed key.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/** True only when the build was given a usable Firebase web app config. */
export const analyticsConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.appId &&
    firebaseConfig.projectId &&
    firebaseConfig.measurementId,
);

type AnalyticsModule = typeof import("firebase/analytics");
type Loaded = { analytics: Analytics; mod: AnalyticsModule };

/** Set before `getAnalytics()` runs, so it lands as the gtag consent default. */
let consentGranted = false;
let loading: Promise<Loaded | null> | null = null;

async function load(): Promise<Loaded | null> {
  if (typeof window === "undefined" || !analyticsConfigured) return null;

  const [{ initializeApp, getApps }, mod] = await Promise.all([
    import("firebase/app"),
    import("firebase/analytics"),
  ]);

  // Browser extensions, disabled cookies and missing IndexedDB all make
  // Analytics unusable; initialising anyway throws.
  if (!(await mod.isSupported())) return null;

  mod.setConsent({
    analytics_storage: consentGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  const app = getApps()[0] ?? initializeApp(firebaseConfig);

  // Sends the first `page_view` automatically for the URL that was loaded.
  return { analytics: mod.getAnalytics(app), mod };
}

/**
 * Starts Analytics once per page load. Safe to call repeatedly — and it is,
 * because React 18+ mounts effects twice in development.
 */
export function initAnalytics(): Promise<Loaded | null> {
  loading ??= load().catch(() => null);
  return loading;
}

/** Records a custom or recommended GA4 event. Fire-and-forget by design. */
export function track(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  void initAnalytics().then((loaded) => {
    if (loaded) loaded.mod.logEvent(loaded.analytics, name, params);
  });
}

/**
 * Records a `page_view` for a client-side route change. The very first view of
 * a page load is sent by the SDK itself, so only call this on navigation.
 */
export function trackPageView(path: string): void {
  void initAnalytics().then((loaded) => {
    if (!loaded) return;
    loaded.mod.logEvent(loaded.analytics, "page_view", {
      page_location: window.location.href,
      page_path: path,
      page_title: document.title,
    });
  });
}

/**
 * Upgrades to cookie-backed measurement — returning visitors, sessions and
 * traffic sources. Call this only after a visitor has actively agreed.
 */
export function grantAnalyticsConsent(): void {
  consentGranted = true;
  void initAnalytics().then((loaded) => {
    loaded?.mod.setConsent({ analytics_storage: "granted" });
  });
}

/** Returns to cookieless measurement, e.g. when consent is withdrawn. */
export function denyAnalyticsConsent(): void {
  consentGranted = false;
  void initAnalytics().then((loaded) => {
    loaded?.mod.setConsent({ analytics_storage: "denied" });
  });
}
