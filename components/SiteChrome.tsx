import { MobileNav } from "@/components/MobileNav";
import { ArrowIcon, BookIcon } from "@/components/Icons";
import { hasStoreLinks, site } from "@/content/site";

export function Wordmark() {
  return (
    <a className="wordmark" href="/" aria-label="ReadPace home">
      <span className="brand-mark">
        <BookIcon aria-hidden="true" />
      </span>
      ReadPace<span className="wordmark-dot">.</span>
    </a>
  );
}
const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#sweet-spot", label: "Why ReadPace" },
  { href: "/reading-speed-test", label: "Reading speed test" },
  { href: "/#pricing", label: "Pricing" },
];
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button button-small button-dark nav-cta" href="/#get">
          {hasStoreLinks ? "Get the app" : "Explore the app"}
          <ArrowIcon aria-hidden="true" />
        </a>
        <MobileNav
          links={[
            ...links,
            {
              href: "/#get",
              label: hasStoreLinks ? "Get the app" : "App availability",
            },
          ]}
        />
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-main">
        <div>
          <Wordmark />
          <p>
            For the love of a good book.
            <br />
            And remembering what you read.
          </p>
        </div>
        <nav aria-label="Reading tools">
          <span>FIND YOUR PACE</span>
          <a href="/reading-speed-test">Free reading speed test</a>
          <a href="/wpm-calculator">WPM calculator</a>
          <a href="/average-reading-speed">Average reading speed</a>
        </nav>
        <nav aria-label="Product and support">
          <span>READPACE</span>
          <a href="/#how">How it works</a>
          <a href="/#pricing">Plans & pricing</a>
          <a href="/support">Help & support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date(site.lastUpdated).getUTCFullYear()} {site.name}
        </span>
        <span>Made for people who still turn pages.</span>
        <a href={`mailto:${site.email}`}>Say hello ↗</a>
      </div>
    </footer>
  );
}
