"use client";

import { useState } from "react";
import { Icons } from "@/components/icons";

interface CopyLinkButtonProps {
  url: string;
}

export default function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      // Reset ikon setelah 2 detik
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin link:", err);
      alert("Gagal menyalin link ke clipboard.");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="grid h-9 w-9 place-items-center rounded-full border bg-background text-muted-foreground transition-colors hover:bg-muted"
      aria-label="Salin link artikel"
    >
      {isCopied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald-500"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <Icons.link className="h-4 w-4" />
      )}
    </button>
  );
}
