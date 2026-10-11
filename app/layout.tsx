import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ClickTracker from "@/components/ClickTracker";
import { BASE_URL, MERCHANT_ORIGIN, SITE, sub } from "@/lib/affiliate";

const title = "Best Coswheel Electric Bikes (2026 Buying Guide & Comparison)";
const description =
  "Independent buying guide comparing top Coswheel high-power fat tire e-bikes. Explore CT20S and R19 specs, speed, range, and current merchant prices.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title, description,
  alternates: { canonical: BASE_URL },
  icons: { icon: sub("/favicon.svg") },
  robots: { index: true, follow: true },
  openGraph: {
    title, description, url: BASE_URL, siteName: SITE.name, type: "website", locale: "en_US",
    images: [{ url: `${MERCHANT_ORIGIN}/cdn/shop/files/CT20S_NEW.jpg?v=1784002993&width=1200`, width: 1200, height: 1200, alt: "COSWHEEL CT20S fat tire electric bike" }],
  },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0D0F12" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href={MERCHANT_ORIGIN} />
        <link rel="preconnect" href={MERCHANT_ORIGIN} crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-volt focus:p-3 focus:text-ink">Skip to content</a>
        {children}
        <Analytics />
        <ClickTracker />
      </body>
    </html>
  );
}
