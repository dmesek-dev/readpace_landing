import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/**
 * Crawling is open, including to AI crawlers.
 *
 * For a launch page that *wants* to be quoted by answer engines this is the
 * whole point: ChatGPT, Claude, Perplexity and Gemini can only recommend the
 * app if they are allowed to read the page. The AI agents are listed
 * explicitly rather than relying on the wildcard so the intent is
 * unambiguous — and so removing one later is a one-line change.
 */
const aiAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiAgents.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
