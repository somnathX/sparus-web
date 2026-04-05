import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "",
  "/services",
  "/solutions",
  "/locations",
  "/about",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return paths.map((path) => ({
    url: path === "" ? `${base}/` : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
