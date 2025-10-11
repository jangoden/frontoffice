// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi ini berguna untuk menggabungkan class Tailwind secara dinamis
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function calculateReadingTime(html: string, wpm = 200) {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}

export function formatDate(dateStr: string, locale = "id-ID") {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return { human: "-", iso: undefined };

  const human = date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const iso = date.toISOString();

  return { human, iso };
}
