import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Fungsi untuk mengambil semua postingan dari API
async function getAllPosts(): Promise<{ slug: string; updated_at: string }[]> {
  try {
    const res = await fetch(`${siteConfig.apiUrl}/api/v1/posts`, {
      next: { revalidate: 3600 }, // Revalidasi setiap jam
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch posts for sitemap:", error);
    return [];
  }
}

// Fungsi untuk mengambil semua template dari API
async function getAllTemplates(): Promise<{ slug: string; updated_at: string }[]> {
  try {
    const res = await fetch(`${siteConfig.apiUrl}/api/v1/templates`, {
      next: { revalidate: 3600 }, // Revalidasi setiap jam
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch templates for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl || "http://localhost:3000";

  // 1. Ambil data dinamis
  const posts = await getAllPosts();
  const templates = await getAllTemplates();

  const makeUrl = (path: string, updated_at?: string) => {
    const item: { url: string; lastModified?: Date } = { url: path };
    if (updated_at) {
      const d = new Date(updated_at);
      if (!isNaN(d.getTime())) {
        item.lastModified = d;
      }
    }
    return item;
  };

  const postUrls = posts.map((post) =>
    makeUrl(`${baseUrl}/blog/${post.slug}`, post.updated_at)
  );

  const templateUrls = templates.map((template) =>
    makeUrl(`${baseUrl}/templates/${template.slug}`, template.updated_at)
  );

  // 2. Definisikan halaman statis
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/templates`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  // 3. Gabungkan semua URL
  return [...staticPages, ...postUrls, ...templateUrls];
}
