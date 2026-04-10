import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://cs-executive-entrance-test.koydo.app/sitemap.xml",
    host: "https://cs-executive-entrance-test.koydo.app",
  };
}
