export const siteConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Jagoan IT",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Jagoan IT menyediakan layanan pembuatan website, desain grafis, dan optimasi SEO untuk membantu bisnis Anda tumbuh di dunia digital.",
};
