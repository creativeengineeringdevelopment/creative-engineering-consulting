import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { cases } from "@/lib/work";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    "/about",
    "/how-it-works",
    "/audit",
    "/contact",
    "/privacy",
    ...cases.map((c) => `/work/${c.slug}`),
  ].map((p) => ({
    url: SITE.url + p,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
