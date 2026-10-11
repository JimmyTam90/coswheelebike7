/** @type {import('next').NextConfig} */
// No basePath on purpose: the sales page lives at app/coswheel-ebike/page.tsx so Vercel hub rewrites do not double the subpath.
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
