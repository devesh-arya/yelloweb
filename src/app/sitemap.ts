import type { MetadataRoute } from "next";
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yelloweb.co";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/","/about","/services","/why-us","/industries","/contact"].map(route => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
