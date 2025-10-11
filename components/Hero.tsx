// components/Hero.tsx
"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import heroAnimation from "@/public/animations/hero-animation.json";

export default function Hero() {
  return (
    <section className="relative isolate scroll-mt-[var(--header-h)] overflow-x-clip">
      {/* ====== BACKDROP: grid halus + noise ====== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,.25) 1px, transparent 1px),
            linear-gradient(to bottom, hsla(160, 84%, 39%, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-30 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      {/* ====== CONTENT ====== */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-y-10 px-6 py-14 sm:px-4 sm:py-16 lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:py-24">
        {/* Left: text */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center sm:text-left"
        >
          <p className="inline-block rounded-full border border-emerald-500/30 bg-emerald-100/60 px-3 py-1 text-xs font-semibold text-emerald-700 sm:px-4 sm:py-1.5 sm:text-sm">
            ♦ Partner Transformasi Digital Anda
          </p>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-5xl">
            Wujudkan Masa Depan
            <span className="mt-1 block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent sm:mt-2">
              Bisnis Digital Anda
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-600 sm:mx-0 sm:mt-8 sm:text-lg sm:leading-8">
            Kami merancang dan membangun solusi digital yang powerful—mulai dari
            website modern hingga aplikasi enterprise—untuk mendorong
            pertumbuhan dan efisiensi bisnis Anda.
          </p>

          <div className="mt-8 flex items-center justify-center sm:justify-start">
            <Link
              href="/kontak"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-emerald-500 px-6 py-2.5 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40 sm:px-8 sm:py-3 sm:text-lg"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
              <span className="relative">Mulai Konsultasi Gratis</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right: Lottie + GREEN GRADIENT BACKDROP */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center"
        >
          {/* Elliptical green gradient behind the Lottie */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[48px] blur-xl"
            style={{
              background:
                "radial-gradient(120% 85% at 55% 40%, rgba(16, 185, 92, 0.77) 0%, rgba(16, 185, 67, 0.33) 35%, rgba(16,185,129,0.10) 60%, rgba(16,185,129,0.0) 80%)",
            }}
          />
          <Lottie
            animationData={heroAnimation}
            loop
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
