"use client";
import { useEffect } from "react";
import { GOOGLE_ADS_ID, GOOGLE_ADS_CLICK_LABEL } from "@/lib/tracking";

type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

/** Non-blocking affiliate click events. Does nothing unless GA or Meta Pixel were loaded via env IDs. Never delays navigation. */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-affiliate]");
      if (!el) return;
      const product = el.dataset.product ?? "general";
      const w = window as Win;
      try {
        w.gtag?.("event", "affiliate_click", { product_id: product });
        if (GOOGLE_ADS_ID && GOOGLE_ADS_CLICK_LABEL) w.gtag?.("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CLICK_LABEL}` });
        w.fbq?.("trackCustom", "AffiliateClick", { product_id: product });
      } catch {
        /* analytics must never block the link */
      }
    };
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
