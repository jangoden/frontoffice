// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Beranda" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo Perusahaan"
                width={150}
                height={40}
                className="h-auto w-36 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Partner transformasi digital terpercaya yang membantu bisnis
              bertumbuh melalui solusi teknologi dan desain yang inovatif.
            </p>
          </div>

          {/* Kolom 2: Link Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/cari-desain"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Template
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Kontak</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+621234567890"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <PhoneIcon className="h-5 w-5" />
                  (+62) 123-4567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:halo@perusahaananda.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  halo@perusahaananda.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Jl. Merdeka No.123
                    <br />
                    Jakarta Pusat, 10110
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.5h-8.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {year}{" "}
              <span className="font-semibold text-white">WarungDigital</span>.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm justify-center sm:justify-end">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
