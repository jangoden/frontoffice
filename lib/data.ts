// lib/data.ts
import { siteConfig } from "@/lib/config";
import type { Template } from "@/app/cari-templates/types";
import type { ApiTemplateCategory } from "@/components/template/DesainPageHeader";
import type { Post } from "@/lib/types";

/**
 * Mengambil semua data postingan blog dari API.
 */
export async function getPosts(): Promise<Post[]> {
  // DIHAPUS: /api dari awal path
  const apiUrl = `${siteConfig.apiUrl}/posts`;
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      console.error("Gagal mengambil data posts, status:", res.status);
      return [];
    }
    const response = await res.json();
    return response.data || [];
  } catch (error) {
    console.error("Error di getPosts():", error);
    return [];
  }
}

/**
 * Mengambil detail satu post berdasarkan slug dari API.
 */
export async function getPostDetail(slug: string): Promise<Post | null> {
  // DIHAPUS: /api dari awal path
  const apiUrl = `${siteConfig.apiUrl}/posts/${slug}`;
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Gagal mengambil post detail (${slug}), status:`, res.status);
      return null;
    }
    const response = await res.json();
    return response.data || null;
  } catch (error) {
    console.error(`Error di getPostDetail(${slug}):`, error);
    return null;
  }
}

/**
 * Mengambil data template dari API.
 */
export async function fetchTemplates(categorySlug: string | null): Promise<Template[]> {
  // DIHAPUS: /api dari awal path
  let apiUrl = `${siteConfig.apiUrl}/templates`;
  if (categorySlug) {
    apiUrl += `?category=${categorySlug}`;
  }

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      console.error("Gagal mengambil data template, status:", res.status);
      return [];
    }
    const response = await res.json();
    return response.data || [];
  } catch (error) {
    console.error("Error di fetchTemplates():", error);
    return [];
  }
}

/**
 * Mengambil semua data kategori template dari API.
 */
export async function fetchCategories(): Promise<ApiTemplateCategory[]> {
  // DIHAPUS: /api dari awal path
  const apiUrl = `${siteConfig.apiUrl}/template-categories`;
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      console.error("Gagal mengambil data kategori, status:", res.status);
      return [];
    }
    const response = await res.json();
    return response.data || [];
  } catch (error) {
    console.error("Error di fetchCategories():", error);
    return [];
  }
}
