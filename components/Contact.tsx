// components/Contact.tsx
"use client";

import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Di sini Anda akan menambahkan logika untuk mengirim data form
    // Misalnya, menggunakan API ke backend, EmailJS, atau layanan lainnya.
    console.log("Data yang Dikirim:", formData);
    alert("Terima kasih! Pesan Anda telah kami terima.");
    // Reset form setelah submit
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative isolate bg-white py-20 sm:py-28">
      {/* Efek glow di background */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gray-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-white" />
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-green-400"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="pt-8" data-aos="fade-right">
            <p className="font-semibold text-emerald-600">Hubungi Kami</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Siap Memulai Proyek Anda Berikutnya?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Isi form di samping atau hubungi kami melalui salah satu kontak di
              bawah. Tim kami siap membantu mewujudkan ide Anda.
            </p>
            <div className="mt-10 space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 flex-shrink-0 text-emerald-500" />
                <a href="tel:+621234567890" className="hover:text-emerald-600">
                  (+62) 123-4567-890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-emerald-500" />
                <a
                  href="mailto:halo@perusahaananda.com"
                  className="hover:text-emerald-600"
                >
                  halo@perusahaananda.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-500" />
                <span>Jl. Digital Kreatif No. 123, Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form Kontak */}
          <div
            className="rounded-2xl border border-gray-200/50 bg-white/60 p-8 shadow-2xl shadow-gray-500/10 backdrop-blur-lg"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Pesan Anda
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-500 py-3 px-6 text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-600"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
