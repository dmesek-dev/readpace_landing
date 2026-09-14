"use client";
import { useEffect, useRef } from "react";

export function MobileNav({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node))
        menu.current.open = false;
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  return (
    <details
      className="mobile-nav"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Toggle navigation">
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              if (menu.current) menu.current.open = false;
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
