// components/About.tsx
"use client";

import Lottie from "lottie-react";
import teamworkAnimation from "@/public/animations/teamwork-animation.json";
import {
  LightBulbIcon,
  PaintBrushIcon,
  CpuChipIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

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

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-emerald-100/50 py-12 sm:py-16"
    >
      {/* Efek Latar Belakang: Gradien dan Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffb5] to-[#2cf281] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_50%_50%,rgba(16,185,129,0.1),#fff_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

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
            <p className="font-semibold leading-7 text-emerald-600 px-4 sm:px-0">
              Tentang Kami
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl px-4 sm:px-0">
              Membangun Jembatan Digital Menuju Sukses Anda
            </h2>
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
    </section>
  );
}
