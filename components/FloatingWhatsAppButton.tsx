"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Lottie from "lottie-react";
import waAnim from "@/public/animations/whatsapp.json";

const WA_NUMBER = "6281380904271";
const WA_TEXT = "Halo, saya tertarik konsultasi.";

export default function FloatingWhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    setMounted(true);

    // pause animasi bila user pilih reduced motion / tab tidak aktif
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPlay(!mq.matches && !document.hidden);
    sync();
    mq.addEventListener?.("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      mq.removeEventListener?.("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  if (!mounted) return null;

  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

  const btn = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+16px)]
        z-[2147483647] grid h-14 w-14 place-items-center rounded-full
        bg-white shadow-xl shadow-black/25 ring-1 ring-black/5
        transition-transform hover:scale-105 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-emerald-500
      "
    >
      <Lottie
        animationData={waAnim}
        loop={play}
        autoplay={play}
        className="h-10 w-10"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </a>
  );

  // render di body supaya tidak ketimpa/ter-clip parent
  return createPortal(btn, document.body);
}
