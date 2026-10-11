import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/affiliate";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"];
  return routes.map((r) => ({ url: `${BASE_URL}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.3 }));
}
