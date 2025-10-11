"use client";

import { useState } from "react";

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Clipboard error:", e);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center rounded-full px-3 py-1 text-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      aria-live="polite"
    >
      {copied ? "Disalin!" : "Salin Link"}
    </button>
  );
}
