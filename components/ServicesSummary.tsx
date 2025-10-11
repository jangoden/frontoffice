// components/ServicesSummary.tsx
"use client";

import {
  ComputerDesktopIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

// Data untuk kartu layanan dengan ikon SVG
const services = [
  {
    Icon: ComputerDesktopIcon,
    title: "Pengembangan Website & Aplikasi",
    description:
      "Membangun website dan aplikasi mobile yang responsif, cepat, dan aman untuk menjangkau audiens Anda.",
  },
  {
    Icon: PaintBrushIcon,
    title: "Desain UI/UX",
    description:
      "Merancang antarmuka yang intuitif dan pengalaman pengguna yang memikat untuk meningkatkan kepuasan pelanggan.",
  },
  {
    Icon: ChartBarIcon,
    title: "Strategi Digital & SEO",
    description:
      "Meningkatkan visibilitas online Anda dan mendatangkan trafik berkualitas melalui strategi SEO yang terbukti.",
  },
  {
    Icon: CloudIcon,
    title: "Solusi Enterprise & Cloud",
    description:
      "Mengoptimalkan proses bisnis dengan sistem enterprise dan infrastruktur cloud yang andal dan skalabel.",
  },
];

export default function ServicesSummary() {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <p className="mb-3 font-semibold text-emerald-600">Layanan Kami</p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl">
            Solusi Digital untuk Setiap Kebutuhan
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 px-4 sm:px-0 text-justify">
            Kami menyediakan spektrum layanan yang luas untuk memastikan semua
            aspek digital bisnis Anda tertangani dengan sempurna.
          </p>
        </div>

        {/* Grid Kartu Layanan dengan Desain Baru */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="transform rounded-xl border border-transparent bg-white p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Lingkaran Ikon yang Didesain Ulang */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <service.Icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
