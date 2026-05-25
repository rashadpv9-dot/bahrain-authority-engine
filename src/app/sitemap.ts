import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://bahrainauthorityengine.com";

  // Static site entryways
  const staticRoutes = [
    "",
    "/privacy-policy",
    "/insights",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Industry vertical hubs
  const industries = ["healthcare", "legal", "food-and-beverage", "ecommerce"].map((ind) => ({
    url: `${baseUrl}/industries/${ind}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Geographic target landing pages (Bahrain specific hubs)
  const locations = ["seo-manama", "seo-seef", "seo-riffa", "seo-muharraq"].map((loc) => ({
    url: `${baseUrl}/locations/${loc}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // In a real app, you would fetch dynamic blog posts here and add them to sitemap
  const dynamicBlogPosts = [
    "aeo-strategy-gcc-2026",
    "google-local-pack-dominance-bahrain",
  ].map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...industries, ...locations, ...dynamicBlogPosts];
}
