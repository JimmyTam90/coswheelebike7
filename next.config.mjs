/** @type {import('next').NextConfig} */
// No basePath on purpose: the sales page lives at app/coswheel-ebike/page.tsx so Vercel hub rewrites do not double the subpath.

// Absolute URL of this (Spoke) deployment. Static assets (/_next/static CSS/JS) load from here
// instead of the Hub domain, which does not serve them. Override with NEXT_PUBLIC_ASSET_PREFIX if the Spoke URL changes.
const SPOKE_URL = process.env.NEXT_PUBLIC_ASSET_PREFIX || "https://coswheelebike7.vercel.app";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.coswheelebike.com", pathname: "/cdn/shop/files/**" },
      { protocol: "https", hostname: "cdn.shopify.com", pathname: "/s/files/**" },
    ],
  },
  // CRITICAL FIX: force static assets (CSS/JS) to fetch directly from the Spoke domain.
  // Production only, so `npm run dev` keeps loading assets locally.
  assetPrefix: process.env.NODE_ENV === "production" ? SPOKE_URL : undefined,
  // Legal routes live at /privacy etc. (standalone routes); these rewrites also serve them under the subpath.
  async rewrites() {
    return [
      { source: "/coswheel-ebike/privacy", destination: "/privacy" },
      { source: "/coswheel-ebike/terms", destination: "/terms" },
      { source: "/coswheel-ebike/contact", destination: "/contact" },
      { source: "/coswheel-ebike/affiliate-disclosure", destination: "/affiliate-disclosure" },
      { source: "/coswheel-ebike/sitemap.xml", destination: "/sitemap.xml" },
    ];
  },
};
export default nextConfig;
