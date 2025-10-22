"use client";

import { ApiPost } from "@/lib/types";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ClipboardDocumentIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";

interface PostFooterProps {
  post: ApiPost;
  shareUrl: string;
}

const ShareIcon = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <div
    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-800 hover:bg-gray-800 hover:text-white"
    aria-label={label}
    title={label}
  >
    {children}
  </div>
);

export default function PostFooter({ post, shareUrl }: PostFooterProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(shareUrl);
  const waText = encodeURIComponent(`${post.title} — ${shareUrl}`);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleInstagramShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.title,
        url: shareUrl,
      });
    } else {
      await handleCopy();
      alert(
        "Instagram tidak mendukung share link langsung via web. Link sudah disalin 👍"
      );
    }
  };

  return (
    <footer className="mt-12 border-t border-gray-200 pt-8">
      {/* Share */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-lg font-semibold text-gray-800">
          Bagikan Artikel Ini:
        </p>

        <div className="flex items-center space-x-4">
          {/* WhatsApp */}
          <Link
            href={`https://wa.me/?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShareIcon label="WhatsApp">
              <FaWhatsapp className="h-6 w-6" />
            </ShareIcon>
          </Link>

          {/* Facebook */}
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShareIcon label="Facebook">
              <FaFacebookF className="h-6 w-6" />
            </ShareIcon>
          </Link>

          {/* Instagram */}
          <button type="button" onClick={handleInstagramShare}>
            <ShareIcon label="Instagram">
              <FaInstagram className="h-6 w-6" />
            </ShareIcon>
          </button>

          {/* Salin Link */}
          <button type="button" onClick={handleCopy}>
            <ShareIcon label="Salin Link">
              {copied ? (
                <CheckIcon className="h-6 w-6" />
              ) : (
                <ClipboardDocumentIcon className="h-6 w-6" />
              )}
            </ShareIcon>
          </button>
        </div>
      </div>

      {/* Kembali */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-x-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:border-gray-800 hover:bg-gray-800 hover:text-white"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Kembali ke Semua Blog</span>
        </Link>
      </div>
    </footer>
  );
}
