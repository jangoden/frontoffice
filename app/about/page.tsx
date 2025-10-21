// app/tentang/page.tsx
"use client";

import Lottie from "lottie-react";
import teamworkAnimation from "@/public/animations/teamwork-animation.json";
import {
  LightBulbIcon,
  PaintBrushIcon,
  CpuChipIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import PageHeader from "@/components/PageHeader";

// Daftar Nilai Inti/Fitur untuk kemudahan pengelolaan
const coreValues = [
  {
    name: "Strategi Cerdas",
    description:
      "Menganalisis kebutuhan Anda untuk merancang solusi digital yang tepat sasaran.",
    icon: LightBulbIcon,
  },
  {
    name: "Desain Berpusat Pengguna",
    description:
      "Menciptakan antarmuka yang tidak hanya indah, tapi juga intuitif dan memikat.",
    icon: PaintBrushIcon,
  },
  {
    name: "Teknologi Terkini",
    description:
      "Menggunakan tumpukan teknologi modern untuk website yang cepat, aman, dan skalabel.",
    icon: CpuChipIcon,
  },
  {
    name: "Kemitraan Jangka Panjang",
    description:
      "Kami bukan sekadar vendor, kami adalah mitra digital yang mendukung pertumbuhan Anda.",
    icon: UsersIcon,
  },
];

export default function TentangPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Membangun Jembatan Digital Menuju Sukses Anda"
      />
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
            {/* Bagian Kiri: Animasi Lottie */}
            <div
              className="hidden lg:flex justify-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Lottie
                animationData={teamworkAnimation}
                loop={true}
                className="w-full max-w-md"
              />
            </div>

            {/* Bagian Kanan: Konten Teks */}
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-center lg:text-left"
            >
              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 text-justify px-4 sm:px-0 mx-auto max-w-2xl">
                Kami adalah tim strategis, desainer, dan developer yang
                bersemangat menciptakan solusi digital yang berdampak. Kami
                percaya bahwa website yang hebat adalah perpaduan antara seni,
                teknologi, dan strategi bisnis yang solid.
              </p>

              {/* Grid Nilai Inti */}
              <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-y-12">
                {coreValues.map((value, index) => (
                  <div
                    key={value.name}
                    className="relative flex flex-col items-center text-center lg:items-start lg:text-left px-6 sm:px-4 lg:px-0"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 lg:mb-0 lg:absolute lg:left-0 lg:top-0 lg:h-10 lg:w-10">
                      <value.icon
                        className="h-7 w-7 text-white lg:h-6 lg:w-6"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="lg:pl-12">
                      <dt className="font-bold leading-7 text-gray-900 text-lg sm:text-base mb-3 sm:mb-2">
                        {value.name}
                      </dt>
                      <dd className="text-base leading-7 text-gray-600 text-justify">
                        {value.description}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
