import "@/app/globals.css";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BASE_URL, DEFAULT_AFFILIATE_URL, SITE } from "@/lib/affiliate";
import { PRODUCTS } from "@/lib/products";
import type { Specs } from "@/lib/types";

const money = (n: number) => `$${n.toLocaleString("en-US")}`;
const ROWS: [keyof Specs, string][] = [
  ["topSpeed", "Top speed"], ["range", "Max range"], ["torque", "Torque"], ["motor", "Motor peak power"],
  ["battery", "Battery"], ["brakes", "Brakes"], ["tires", "Tires"], ["suspension", "Suspension"],
];
const first = (n: string) => n.split(" ")[0];
const list = (ps: typeof PRODUCTS) => ps.map((p) => first(p.name)).join(", ");
const highTorque = PRODUCTS.filter((p) => p.torqueNm >= 100);
const hydraulic = PRODUCTS.filter((p) => p.hydraulicBrakes);
const removable = PRODUCTS.filter((p) => p.removableBattery);
const WHY: [string, string][] = [
  ["High-torque climbing", `Merchant-listed torque: ${highTorque.map((p) => `${first(p.name)} ${p.specs.torque}`).join("; ")}. Figures are the merchant's own ratings.`],
  ["Dual-piston hydraulic brakes", `${list(hydraulic)} list dual-piston hydraulic oil brakes with large discs for stronger, steadier stopping.`],
  ["Removable batteries", `The merchant states the ${list(removable)} batteries can be removed and charged separately. Check each product page for the other models.`],
  ["US warehouse shipping", "The merchant lists free US shipping from its US warehouse, with 5–8 business days for the United States."],
  ["1-year warranty", "COSWHEEL lists a 1-year warranty and 30-day returns. Read the full warranty and return policies before you buy."],
];

export default function Home() {
  const hero = PRODUCTS[0];
  const maxSave = Math.max(...PRODUCTS.map((p) => (p.was ? p.was - p.price : 0)));
  const ld = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: BASE_URL };
  return (
    <>
      <Header />
      <main id="main">
        <p className="bg-volt px-4 py-2 text-center text-sm font-semibold text-ink">
          Merchant listings on Oct 7, 2026: save up to {money(maxSave)} off regular price on the in-stock models below.
        </p>
        <section className="grid-bg border-b border-edge">
          <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-6 px-4 py-10 md:grid-cols-2 md:py-16">
            <div className="md:col-start-1 md:row-start-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-flare">Independent guide for US off-road riders</p>
              <h1 className="mt-2 font-display text-5xl uppercase leading-none text-white md:text-6xl">Fat tire and e-dirt bikes built for power</h1>
              <p className="mt-4 max-w-prose text-lg text-mist">
                The {hero.name.split(" ")[0]} pairs a {hero.specs.motor.replace(", ", " ")} motor with {hero.specs.tires.replace(" off-road fat tires", " fat tires")} and up to 100 miles of range with pedal assist. See how it compares with the R19, R6000 and Y16.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-edge md:col-start-2 md:row-span-2 md:row-start-1">
              <a href={hero.affiliateUrl} target="_blank" rel="noopener noreferrer" data-affiliate="true" data-product={hero.id} aria-label={`View ${hero.name} on the merchant website`} className="block"><Image src={hero.image} alt={hero.alt} width={900} height={900} priority sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full bg-deep" /></a>
            </div>
            <div className="md:col-start-1 md:row-start-2">
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href={hero.affiliateUrl} productId={hero.id}>Shop the {hero.name.split(" ")[0]}</CTAButton>
                <CTAButton href="#bikes" variant="ghost">Compare models</CTAButton>
              </div>
              <p className="mt-3 text-xs text-mist">Shop links open the merchant&apos;s website in a new tab.</p>
            </div>
          </div>
        </section>

        <section id="bikes" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-14">
          <h2 className="font-display text-4xl uppercase text-white">Compare the in-stock lineup</h2>
          <p className="mt-2 max-w-prose text-mist">
            Specs, stock and prices were observed on the merchant&apos;s website on October 7, 2026, and only models listed as in stock that day are shown. They can change, so confirm at checkout. Max range is the merchant&apos;s best-case figure with pedal assist.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>

          <div className="mt-12 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">Specification comparison of the featured COSWHEEL ebikes</caption>
              <thead>
                <tr className="border-b border-edge">
                  <th scope="col" className="p-3 text-mist">Spec</th>
                  {PRODUCTS.map((p) => <th scope="col" key={p.id} className="p-3 font-display text-lg text-white">{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([k, label]) => (
                  <tr key={k} className="border-b border-edge">
                    <th scope="row" className="p-3 font-semibold text-mist">{label}</th>
                    {PRODUCTS.map((p) => <td key={p.id} className="p-3 text-white">{p.specs[k]}</td>)}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="p-3 font-semibold text-mist">Merchant price</th>
                  {PRODUCTS.map((p) => <td key={p.id} className="p-3 font-bold text-volt">{money(p.price)}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="why" className="scroll-mt-16 border-y border-edge bg-panel/60">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-display text-4xl uppercase text-white">Why riders shortlist these bikes</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(([t, d]) => (
                <div key={t} className="border-l-4 border-volt pl-4">
                  <h3 className="text-lg font-bold text-white">{t}</h3>
                  <p className="mt-1 text-mist">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-mist">Source: coswheelebike.com, observed October 7, 2026. Terms are set by the merchant and may change.</p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-4 py-14">
          <h2 className="mb-6 font-display text-4xl uppercase text-white">Questions before you click</h2>
          <FAQ />
        </section>

        <section className="border-t border-edge bg-panel/60">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center">
            <h2 className="font-display text-4xl uppercase text-white">Ready to pick your ride?</h2>
            <p className="mt-2 text-mist">Browse the full COSWHEEL range on the merchant&apos;s website.</p>
            <CTAButton href={DEFAULT_AFFILIATE_URL} className="mt-6">Shop COSWHEEL ebikes</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
