import type { ReactNode } from "react";

import { site } from "@/content/site";

/** Shared shell + prose primitives for the small legal/support pages. */
export function Doc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main id="main" className="bg-warm-wash">
      <div className="mx-auto max-w-2xl px-5 py-16 md:py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-deep"
        >
          ← Back to {site.name}
        </a>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-2 text-sm text-taupe">Last updated {updated}</p>
        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}

export const H = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-bold text-ink">{children}</h2>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 text-base leading-relaxed text-ink-soft">{children}</p>
);

export const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="font-semibold text-brand underline hover:text-brand-deep">
    {children}
  </a>
);

export const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-base leading-relaxed text-ink-soft">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
        {item}
      </li>
    ))}
  </ul>
);
