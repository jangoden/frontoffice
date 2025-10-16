// lib/data.ts
import { siteConfig } from "@/lib/config";
import type { Template } from "@/app/cari-templates/types";
import type { ApiTemplateCategory } from "@/components/template/DesainPageHeader";
import type { Post } from "@/lib/types";

// ... (fungsi getPosts & getPostDetail)

export async function getPostDetail(slug: string): Promise<Post | null> {
  // BENAR: Langsung ke endpoint, tanpa /api
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

export async function fetchTemplates(categorySlug: string | null): Promise<Template[]> {
  // BENAR: Langsung ke endpoint, tanpa /api atau /v1
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

export async function fetchCategories(): Promise<ApiTemplateCategory[]> {
  // BENAR: Langsung ke endpoint, tanpa /api atau /v1
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
