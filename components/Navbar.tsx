"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavItem = { name: string; href: string; section?: string };
const navLinks: NavItem[] = [
  { name: "Beranda", href: "/" }, // section "top" (implicit)
  { name: "Tentang", href: "/#about", section: "about" },
  { name: "Layanan", href: "/layanan" },
  { name: "Desain", href: "/cari-templates" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<"top" | string>("top");

  // efek sticky
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy untuk section di halaman /
  useEffect(() => {
    if (pathname !== "/") return;

    const targets: Element[] = [];
    // sentinel di paling atas untuk "Beranda"
    const topSentinel = document.createElement("div");
    topSentinel.id = "__top";
    document.body.prepend(topSentinel);
    targets.push(topSentinel);

    // section dari navLinks (/#id)
    navLinks.forEach((l) => {
      if (l.section) {
        const el = document.getElementById(l.section);
        if (el) targets.push(el);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        // pilih entry yang paling terlihat
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setCurrentSection(
            visible.target.id === "__top" ? "top" : visible.target.id
          );
        }
      },
      {
        // section dianggap aktif saat titik tengah viewport melewati section tsb
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    targets.forEach((t) => io.observe(t));
    // sync awal dengan hash (kalau dibuka di /#about)
    if (window.location.hash) {
      setCurrentSection(window.location.hash.replace("#", ""));
    }

    return () => {
      io.disconnect();
      topSentinel.remove();
    };
  }, [pathname]);

  // tutup sheet mobile saat pindah halaman/section
  useEffect(() => {
    setOpen(false);
  }, [pathname, currentSection]);

  const isActive = (href: string) => {
    // halaman lain
    if (!href.startsWith("/#") && href !== "/")
      return pathname.startsWith(href);

    // di home:
    if (href === "/") return pathname === "/" && currentSection === "top";
    const id = href.split("#")[1]; // "about"
    return pathname === "/" && currentSection === id;
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-all duration-300",
        scrolled
          ? "bg-emerald-800/95 backdrop-blur-md shadow-md border-b border-black/10"
          : "bg-emerald-700/95 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Beranda"
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="h-[var(--logo-h)] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/10 px-1.5 py-1 backdrop-blur-sm md:flex"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "relative rounded-full px-4 py-2 text-sm transition-all",
                "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                isActive(link.href)
                  ? "bg-white text-emerald-900 font-semibold"
                  : "text-white/90 hover:text-white hover:bg-white/15"
              )}
              onClick={() => {
                // langsung set section biar highlight responsif saat klik
                if (link.section) setCurrentSection(link.section);
                if (link.href === "/") setCurrentSection("top");
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + tombol mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/kontak"
            className="hidden rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Hubungi Kami
          </Link>

          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/15 text-white outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-emerald-300/50 md:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <div
        className={clsx(
          "md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={clsx(
            "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={clsx(
            "absolute left-0 top-[var(--header-h)] z-50 w-full origin-top bg-emerald-700 text-white shadow-xl transition-transform duration-300",
            open ? "scale-y-100" : "scale-y-0"
          )}
        >
          <nav className="flex flex-col gap-1 p-4" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <Link
                key={`m-${link.name}`}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-lg px-4 py-3 text-base transition-colors",
                  "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                  isActive(link.href)
                    ? "bg-white/20"
                    : "hover:bg-white/10 text-white/95"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-white px-4 py-3 text-center font-bold text-emerald-900"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
