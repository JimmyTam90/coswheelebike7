"use client";
import { useState } from "react";

const ITEMS = [
  ["Is PrimeGearLab the official COSWHEEL store?", "No. PrimeGearLab is an independent affiliate guide. Purchases are completed on the merchant's own website, coswheelebike.com."],
  ["What happens when I click a button?", "The merchant's website opens in a new tab. This page stays open so you can keep comparing."],
  ["Where are the GT20, GT20 Pro and GT20 Max?", "They were listed as sold out on the merchant's website on October 7, 2026, so they are not featured. The models shown were listed as in stock."],
  ["Are the batteries removable?", "The merchant states the R19 and R6000 batteries can be removed and charged separately. For other models, check the product page on the merchant's website."],
  ["Is shipping free in the USA?", "The merchant states free shipping to the US. Confirm the final terms at checkout."],
  ["How long does US delivery take?", "The merchant lists 5–8 business days for the United States, depending on stock in its local warehouses."],
  ["Is there a warranty and a return window?", "The merchant lists a 1-year warranty and returns or exchanges within 30 days. Read its warranty and return policies before you buy."],
  ["Are the prices and stock on this page final?", "Stock and prices were observed on the merchant's site on October 7, 2026 and can change. The merchant's product page and checkout always apply."],
] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-edge rounded-lg border border-edge bg-panel">
      {ITEMS.map(([q, a], i) => (
        <div key={q}>
          <h3>
            <button type="button" id={`faq-btn-${i}`} aria-expanded={open === i} aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex min-h-[48px] w-full items-center justify-between gap-4 px-4 py-3 text-left font-semibold text-white">
              <span>{q}</span>
              <span aria-hidden="true" className="text-volt">{open === i ? "−" : "+"}</span>
            </button>
          </h3>
          <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={open !== i} className="px-4 pb-4 text-mist">{a}</div>
        </div>
      ))}
    </div>
  );
}
