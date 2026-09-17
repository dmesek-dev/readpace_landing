"use client";

import type { ReactNode } from "react";

import { track } from "@/lib/analytics";

/**
 * The clickable half of a store badge, split out so `StoreBadges` — and the
 * page around it — stay server components.
 *
 * Opens in a new tab on purpose: the visitor keeps the landing page, and the
 * analytics beacon is not racing a document unload.
 */
export function StoreLink({
  href,
  store,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  /** GA4 event parameter: which storefront was opened. */
  store: "app_store" | "google_play";
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      className={className}
      onClick={() => track("store_click", { store, link_url: href })}
    >
      {children}
    </a>
  );
}
