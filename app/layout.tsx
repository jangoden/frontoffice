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
  title: "IT Support Profesional",
  description: "Solusi IT untuk bisnis Anda",
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
