// lib/postsData.ts
import { ApiPost } from "@/lib/types";
import { siteConfig } from "@/lib/config";

/**
 * Mengambil semua postingan blog dari API.
 * Fungsi ini digunakan untuk mengisi halaman blog utama.
 * Termasuk penanganan error dan mengembalikan array kosong jika gagal.
 * @returns {Promise<ApiPost[]>} Promise yang menghasilkan array postingan.
 */
export async function getAllPosts(): Promise<ApiPost[]> {
  try {
    // Menggunakan apiUrl dari siteConfig yang sudah diatur dengan environment variables
    const apiUrl = `${siteConfig.apiUrl}/api/v1/posts`;

    // Mengambil data dengan opsi revalidate untuk caching (ISR)
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } }); // Revalidate setiap jam

    if (!res.ok) {
      console.error("Gagal mengambil data postingan, status:", res.status);
      // Mengembalikan array kosong jika fetch gagal agar halaman tidak crash
      return [];
    }

    const response = await res.json();
    // API Laravel biasanya membungkus data dalam properti 'data'
    return response.data || [];
  } catch (error) {
    console.error("Terjadi error saat mengambil semua post:", error);
    // Mengembalikan array kosong jika terjadi kesalahan
    return [];
  }
}

/**
 * Mengambil detail satu postingan blog berdasarkan slug dari API.
 * Fungsi ini digunakan untuk halaman detail postingan blog.
 * @param {string} slug - Slug dari post yang akan diambil.
 * @returns {Promise<ApiPost | null>} Promise yang menghasilkan objek post atau null jika tidak ditemukan.
 */
export async function getPostDetail(slug: string): Promise<ApiPost | null> {
  try {
    const apiUrl = `${siteConfig.apiUrl}/api/v1/posts/${slug}`;
    const res = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 }, // Revalidate setiap jam
    });

    if (res.status === 404) {
      return null; // Postingan tidak ditemukan
    }
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error(`Error fetching post detail for slug "${slug}":`, err);
    return null;
  }
}
