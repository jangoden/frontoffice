// components/blog/json-ld.tsx

"use client";

import { ApiPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export default function JsonLd({ post, url }: { post: ApiPost; url: string }) {
  const { iso: isoDate } = formatDate(post.published_date);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: isoDate,
    dateModified: isoDate, // Asumsi tanggal modifikasi sama dengan publikasi
    author: { "@type": "Person", name: post.author || "Admin" },
    image: post.image_url || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
