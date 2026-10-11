import Image from "next/image";
import type { Product } from "@/lib/types";
import CTAButton from "./CTAButton";

const money = (n: number) => `$${n.toLocaleString("en-US")}`;
const LABELS: [keyof Product["specs"], string][] = [
  ["topSpeed", "Top speed"], ["range", "Max range"], ["torque", "Torque"], ["motor", "Motor"],
  ["battery", "Battery"], ["brakes", "Brakes"], ["tires", "Tires"], ["suspension", "Suspension"],
];

/** Mobile order is fixed: image, specs, price, then the CTA in its own block below. Nothing overlays the image. */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-edge bg-panel">
      <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer" data-affiliate="true" data-product={p.id} aria-label={`View ${p.name} on the merchant website`} className="block"><Image src={p.image} alt={p.alt} width={900} height={900} sizes="(min-width: 640px) 50vw, 100vw" className="h-auto w-full bg-deep" /></a>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-flare">{p.type}</p>
        <h3 className="font-display text-2xl text-white">{p.name}</h3>
        <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
          {LABELS.map(([k, label]) => (
            <div key={k} className="rounded bg-deep px-2 py-2">
              <dt className="text-mist">{label}</dt>
              <dd className="mt-1 font-bold text-white">{p.specs[k]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-mist">{p.rating ? `Merchant site: ${p.rating}` : "No reviews yet on merchant site"}</p>
        <p className="mt-2 text-2xl font-bold text-volt">
          {money(p.price)} {p.was && <span className="ml-1 text-sm font-normal text-mist line-through">{money(p.was)}</span>}
        </p>
        <div className="mt-4">
          <CTAButton href={p.affiliateUrl} productId={p.id} className="w-full">Shop the {p.name.split(" ")[0]}</CTAButton>
        </div>
      </div>
    </article>
  );
}
