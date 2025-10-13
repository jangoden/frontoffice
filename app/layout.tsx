import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Jagoan IT - Solusi Digital Terdepan",
    template: "%s | Jagoan IT",
  },
  description:
    "Jagoan IT menyediakan layanan pembuatan website, desain grafis, dan optimasi SEO untuk membantu bisnis Anda tumbuh di dunia digital.",
  openGraph: {
    title: "Jagoan IT - Solusi Digital Terdepan",
    description:
      "Solusi lengkap untuk pembuatan website, desain, dan SEO.",
    url: "https://jagoanit.com", // Ganti dengan domain Anda
    siteName: "Jagoan IT",
    images: [
      {
        url: "https://jagoanit.com/og-image.png", // Ganti dengan URL gambar utama Anda
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagoan IT - Solusi Digital Terdepan",
    description:
      "Solusi lengkap untuk pembuatan website, desain, dan SEO.",
    images: ["https://jagoanit.com/og-image.png"], // Ganti dengan URL gambar utama Anda
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <Navbar />
        <main className="pt-[var(--header-h)]">{children}</main>
        <Footer />

        {/* Tombol WhatsApp global */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
