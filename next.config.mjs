import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the tracing root to this project so an unrelated lockfile higher up
  // the tree (e.g. ~/package-lock.json) doesn't confuse Next's inference.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
