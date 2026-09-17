"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { initAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Mounted once in the root layout. Starts Firebase Analytics after hydration
 * and records a `page_view` for any client-side route change.
 *
 * The site navigates with plain `<a>` elements today, so every visit is a full
 * document load and the SDK's own automatic first `page_view` covers it. The
 * pathname effect exists so that switching to `next/link` later does not
 * silently stop counting pages.
 *
 * Renders nothing.
 */
export function Analytics() {
  const lastPath = useRef<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lastPath.current === pathname) return;
    const firstRender = lastPath.current === null;
    lastPath.current = pathname;

    if (firstRender) {
      void initAnalytics();
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
