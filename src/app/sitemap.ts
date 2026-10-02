import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services/", "/about/", "/contact/"];
  return [...paths, ...services.map((s) => `/services/${s.slug}/`)].map((p) => ({ url: `${site.url}${p}` }));
}
