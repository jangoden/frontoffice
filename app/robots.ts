import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*", // Berlaku untuk semua crawler
      allow: "/", // Izinkan crawling semua halaman
      // disallow: '/admin/', // Contoh jika ada area yang tidak ingin di-crawl
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Tunjukkan lokasi sitemap
  };
}
