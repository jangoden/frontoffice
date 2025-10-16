export const siteConfig = {
  // Diperbarui: Menambahkan /api di akhir URL
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api",
  
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Warung Digital", // Bisa disesuaikan
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Warung Digital menyediakan layanan pembuatan website, desain grafis, dan optimasi SEO untuk membantu bisnis Anda tumbuh di dunia digital.",
};