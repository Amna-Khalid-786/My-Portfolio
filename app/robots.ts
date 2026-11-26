import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://my-portfolio-nu-orcin-87.vercel.app/sitemap.xml",
  };
}
