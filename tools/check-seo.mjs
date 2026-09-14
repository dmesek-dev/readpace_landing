import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const routes = [
  "/",
  "/reading-speed-test",
  "/wpm-calculator",
  "/average-reading-speed",
  "/privacy",
  "/support",
];
const pages = new Map(
  routes.map((route) => [
    route,
    readFileSync(
      resolve(
        ".next/server/app",
        route === "/" ? "index.html" : `${route.slice(1)}.html`,
      ),
      "utf8",
    ),
  ]),
);
const titles = new Set();
const descriptions = new Set();
const sitemap = readFileSync(".next/server/app/sitemap.xml.body", "utf8");
for (const [route, html] of pages) {
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(
    /<meta name="description" content="([^"]+)"/,
  )?.[1];
  assert.ok(
    title && !titles.has(title),
    `${route}: missing or duplicate title`,
  );
  titles.add(title);
  assert.ok(
    description && !descriptions.has(description),
    `${route}: missing or duplicate description`,
  );
  descriptions.add(description);
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: expected one h1`,
  );
  const canonical =
    route === "/" ? "https://readpace.org" : `https://readpace.org${route}`;
  assert.ok(
    html.includes(`rel="canonical" href="${canonical}"`) ||
      html.includes(`rel="canonical" href="${canonical}/"`),
    `${route}: wrong canonical`,
  );
  assert.ok(
    sitemap.includes(`<loc>${canonical}</loc>`),
    `${route}: missing from sitemap`,
  );
  assert.ok(
    !/<meta name="robots" content="[^"]*noindex/.test(html),
    `${route}: accidentally noindexed`,
  );
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  )) {
    const data = JSON.parse(match[1]);
    assert.equal(data["@context"], "https://schema.org");
    for (const entity of data["@graph"] || []) {
      if (route !== "/")
        assert.notEqual(
          entity["@type"],
          "FAQPage",
          `${route}: homepage FAQ leaked into another page`,
        );
      if (entity["@type"] === "WebPage") assert.equal(entity.url, canonical);
      if (entity["@type"] === "MobileApplication")
        assert.ok(
          !entity.installUrl || entity.installUrl !== "https://readpace.org",
          "Home URL must not masquerade as an install URL",
        );
    }
  }
  for (const match of html.matchAll(/href="(\/[^"]*|#[^"]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.startsWith("/_next/")) continue;
    const [pathname, fragment] = href.split("#");
    const target = pathname.split("?")[0] || route;
    if (pages.has(target)) {
      if (fragment)
        assert.ok(
          pages.get(target).includes(`id="${fragment}"`),
          `${route}: broken anchor ${href}`,
        );
    } else {
      assert.ok(
        existsSync(resolve("public", target.slice(1))) ||
          ["/icon.svg", "/manifest.webmanifest"].includes(target),
        `${route}: missing internal target ${href}`,
      );
    }
  }
  console.log(
    `PASS ${route}: metadata, headings, structured data, sitemap, internal links`,
  );
}
assert.ok(
  readFileSync(".next/server/app/robots.txt.body", "utf8").includes("Allow: /"),
);
assert.ok(
  readFileSync(".next/server/app/llms.txt.body", "utf8").includes(
    "/reading-speed-test",
  ),
);
console.log("PASS crawler access and machine-readable resource links");
