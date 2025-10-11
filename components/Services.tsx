// components/Services.tsx
"use client";

import {
  ComputerDesktopIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CloudIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

// Tipe data diubah untuk menggunakan komponen Ikon
type Service = {
  Icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

// Data layanan diupdate dengan Ikon SVG
const servicesData: Service[] = [
  {
    Icon: ComputerDesktopIcon,
    title: "Web & App Development",
    description:
      "Kami membangun solusi digital yang responsif, cepat, dan aman, mulai dari website profil hingga aplikasi enterprise yang kompleks.",
    features: [
      "React & Next.js",
      "Aplikasi Mobile (iOS & Android)",
      "E-commerce Solutions",
      "CMS Integration",
    ],
  },
  {
    Icon: PaintBrushIcon,
    title: "UI/UX & Product Design",
    description:
      "Kami merancang antarmuka yang intuitif dan pengalaman pengguna yang memikat untuk meningkatkan kepuasan dan konversi.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    Icon: ChartBarIcon,
    title: "Digital Marketing & SEO",
    description:
      "Tingkatkan visibilitas online Anda dan datangkan trafik berkualitas melalui strategi SEO dan pemasaran digital yang terbukti.",
    features: [
      "SEO Audit & Strategy",
      "Content Marketing",
      "Social Media Management",
      "PPC Campaigns",
    ],
  },
  {
    Icon: CloudIcon,
    title: "Cloud & DevOps Solutions",
    description:
      "Optimalkan infrastruktur Anda dengan solusi cloud yang andal dan skalabel, serta praktik DevOps untuk siklus pengembangan yang lebih cepat.",
    features: [
      "AWS, Google Cloud",
      "CI/CD Pipeline",
      "Infrastructure as Code",
      "System Monitoring",
    ],
  },
];

export default function Services() {
  return (
    <section id="services-page" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <p className="mb-3 font-semibold text-emerald-600">
            Apa yang Kami Tawarkan
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Layanan Komprehensif Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Dari ide hingga peluncuran, kami menyediakan spektrum layanan
            lengkap untuk mewujudkan visi digital Anda.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex transform flex-col rounded-xl border border-gray-200 bg-white p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <service.Icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="mb-6 flex-grow text-gray-600">
                {service.description}
              </p>

              <ul className="space-y-3 text-left text-gray-700">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
