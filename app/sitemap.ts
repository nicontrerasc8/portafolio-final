import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${baseUrl}/projects/excellia-ubo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${baseUrl}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/experience`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
