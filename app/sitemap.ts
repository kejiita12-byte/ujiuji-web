import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/read",
  "/read/tada-kimochi-wo-hakidashitai",
  "/read/kimochi-wo-hakidashitai-anonymous",
  "/read/umaku-ienai-kedo-shindoi",
  "/words",
  "/ujiuji",
  "/app"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
