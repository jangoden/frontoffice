// lib/data.ts
import { siteConfig } from "@/lib/config";
import type { Template } from "@/app/cari-templates/types";
import type { ApiTemplateCategory } from "@/components/template/DesainPageHeader";

/**
 * Mengambil data template dari API, dengan opsi filter berdasarkan kategori.
 * @param {string | null} categorySlug - Slug kategori untuk filter, atau null untuk semua.
 * @returns {Promise<Template[]>} Promise yang menghasilkan array template.
 */
export async function fetchTemplates(categorySlug: string | null): Promise<Template[]> {
  // Bangun URL API secara dinamis
  let apiUrl = `${siteConfig.apiUrl}/api/templates`;
  if (categorySlug) {
    apiUrl += `?category=${categorySlug}`;
  }

  try {
    // Gunakan cache 'no-store' agar data selalu terbaru
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error("Gagal mengambil data template, status:", res.status);
      return []; // Kembalikan array kosong jika gagal
    }

    const response = await res.json();
    // API Laravel biasanya membungkus data dalam properti 'data'
    return response.data || [];
  } catch (error) {
    console.error("Error di fetchTemplates():", error);
    return []; // Kembalikan array kosong jika terjadi error
  }
}

/**
 * Mengambil semua data kategori template dari API.
 * @returns {Promise<ApiTemplateCategory[]>} Promise yang menghasilkan array kategori.
 */
export async function fetchCategories(): Promise<ApiTemplateCategory[]> {
  const apiUrl = `${siteConfig.apiUrl}/api/template-categories`;
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
