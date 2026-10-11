import { MERCHANT_ORIGIN, deepLink } from "./affiliate";
import type { Product } from "./types";

/**
 * PRODUCT DATA MANIFEST: single source of truth for every product shown on the site.
 * Source: coswheelebike.com product pages. Availability = "in stock" on 2026-10-07.
 * Checked and sold out or removed on that date, so excluded:
 * GT20, GT20 PRO, GT20 MAX (incl. clearance pages, now 404), CT20, Y20L, T20, M20, T16, T26.
 * URL note: slugs like /products/coswheel-ct20s-high-speed-electric-bike returned 404 on 2026-10-07; the slugs below are the live, verified ones.
 */
const img = (file: string, v: string) => `${MERCHANT_ORIGIN}/cdn/shop/files/${file}?v=${v}&width=900`;
const VERIFIED = "2026-10-07";

function make(p: Omit<Product, "productUrl" | "affiliateUrl" | "affiliateStatus" | "availability" | "lastVerified"> & { path: string }): Product {
  const { path, ...rest } = p;
  return {
    ...rest,
    productUrl: `${MERCHANT_ORIGIN}${path}`,
    affiliateUrl: deepLink(path),
    affiliateStatus: "USER_DECLARED_VERIFIED",
    availability: "in_stock",
    lastVerified: VERIFIED,
  };
}

export const PRODUCTS: Product[] = [
  make({
    id: "ct20s", path: "/products/ct20s-ebike", name: "CT20S Ebike", type: "Fat tire ebike",
    price: 2349, was: 2599, rating: "4.9 rating, 20 reviews",
    torqueNm: 120, hydraulicBrakes: true,
    image: img("CT20S_NEW.jpg", "1784002993"), alt: "COSWHEEL CT20S fat tire electric bike",
    specs: {
      topSpeed: "28+ mph", range: "100+ miles (pedal assist)", motor: "60V, 3000W peak",
      battery: "60V 27.5Ah / 1650Wh", tires: '20" x 5.0" off-road fat tires',
      suspension: "Front 80mm, rear 180mm travel",
      torque: "120 N·m, 40° climb", brakes: "Dual-piston hydraulic oil, 180mm discs",
    },
  }),
  make({
    id: "r19", path: "/products/r19-electric-dirt-bike", name: "R19 Electric Dirt Bike", type: "E-dirt bike",
    price: 2499, was: 2899, rating: "70 reviews",
    torqueNm: 240, hydraulicBrakes: true, removableBattery: true,
    image: img("R19-NEW-01.jpg", "1778169060"), alt: "COSWHEEL R19 electric dirt bike",
    specs: {
      topSpeed: "60 mph", range: "124 miles (pedal assist)", motor: "72V, 9000W peak",
      battery: "72V 40Ah / 2880Wh", tires: '19" off-road (70/100 front, 80/100 rear)',
      suspension: "Front 220mm, rear 300mm travel",
      torque: "240 N·m, 45° climb", brakes: "Dual-piston hydraulic oil, 203mm discs",
    },
  }),
  make({
    id: "r6000", path: "/products/r6000-dirt-ebike", name: "R6000 Dirt Ebike", type: "E-dirt bike",
    price: 1599, was: 1999, rating: "4.8 rating, 44 reviews",
    torqueNm: 180, hydraulicBrakes: true, removableBattery: true,
    image: img("R6000-BLEACK-NEW-01.jpg", "1785153913"), alt: "COSWHEEL R6000 dirt electric bike in black",
    specs: {
      topSpeed: "55 mph", range: "80 miles (pedal assist)", motor: "60V, 7000W peak",
      battery: "60V 30Ah / 1800Wh", tires: '17" 70/100 off-road tires',
      suspension: "Front 180mm, rear 40mm travel",
      torque: "180 N·m, 40° climb", brakes: "Dual-piston hydraulic oil, 203mm discs",
    },
  }),
  make({
    id: "y16", path: "/products/y16-ebike", name: "Y16 Ebike", type: "Compact all-terrain commuter",
    price: 1299,
    torqueNm: 50, hydraulicBrakes: false,
    image: img("Y16_main.jpg", "1766665517"), alt: "COSWHEEL Y16 compact electric bike",
    specs: {
      topSpeed: "28 mph", range: "52+ miles (pedal assist)", motor: "48V, 1000W peak",
      battery: "48V 15Ah / 720Wh", tires: '16" x 4.0" all-terrain tires',
      suspension: "Front 80mm, dual rear shocks",
      torque: "50 N·m, 25° climb", brakes: "Dual disc brakes, 160mm discs",
    },
  }),
];
