// components/WhyChooseUs.tsx
"use client";

import Image from "next/image";
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ChartPieIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

// Data untuk poin-poin keunggulan
const features = [
  {
    Icon: UserGroupIcon,
    title: "Tim Ahli & Berpengalaman",
    description:
      "Tim kami terdiri dari para profesional terbaik di bidangnya yang siap memberikan solusi inovatif.",
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: "Proses Kolaboratif",
    description:
      "Kami percaya komunikasi adalah kunci. Anda akan selalu terlibat dalam setiap langkah proses pengembangan.",
  },
  {
    Icon: ChartPieIcon,
    title: "Hasil Terukur & Nyata",
    description:
      "Setiap strategi yang kami implementasikan dirancang untuk memberikan hasil yang terukur dan berdampak.",
  },
  {
    Icon: SparklesIcon,
    title: "Inovasi Teknologi Terkini",
    description:
      "Kami selalu menggunakan teknologi terbaru untuk memastikan produk digital Anda selalu terdepan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Kolom Kiri: Konten Teks dan Poin Keunggulan */}
          <div data-aos="fade-right">
            <p className="mb-3 font-semibold text-emerald-600">
              Mengapa Memilih Kami
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Partner Digital Terpercaya untuk Pertumbuhan Bisnis Anda
            </h2>
            <p className="mb-10 text-lg text-gray-600">
              Kami bukan hanya vendor, kami adalah partner strategis Anda. Kami
              berdedikasi untuk memahami visi Anda dan mengubahnya menjadi
              kenyataan digital yang sukses.
            </p>

            {/* Daftar Poin Keunggulan */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <feature.Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div
            className="relative flex h-full min-h-[400px] items-center justify-center"
            data-aos="fade-left"
          >
            <div className="absolute h-[80%] w-[80%] rounded-2xl bg-emerald-100/50"></div>
            <Image
              src="/images/portofolio.jpg"
              alt="Tim kami sedang berkolaborasi"
              width={500}
              height={600}
              className="relative w-full max-w-sm rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
