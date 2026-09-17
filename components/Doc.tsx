import type { ReactNode } from "react";

import { site } from "@/content/site";

/**
 * Shared shell + prose primitives for the small legal/support pages.
 *
 * Styling lives in `globals.css` under `.doc-*` rather than in utility classes
 * here: the base `h1, h2, h3, p { margin: 0 }` reset is unlayered, so it wins
 * against any Tailwind margin or font-size utility placed on these elements.
 */
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
      <div className="doc-shell">
        <a href="/" className="doc-back">
          ← Back to {site.name}
        </a>
        <h1>{title}</h1>
        <p className="doc-updated">Last updated {updated}</p>
        <div className="doc-body">{children}</div>
      </div>
    </main>
  );
}

export const H = ({ children }: { children: ReactNode }) => <h2>{children}</h2>;

export const P = ({ children }: { children: ReactNode }) => <p>{children}</p>;

export const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="doc-link">
    {children}
  </a>
);

export const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="doc-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
