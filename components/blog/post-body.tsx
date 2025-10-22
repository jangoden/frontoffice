// components/blog/post-body.tsx

import Image from "next/image";
import { ApiPost } from "@/lib/types";

interface PostBodyProps {
  post: ApiPost;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <div className="mt-8">
      {/* Gambar Utama Artikel (di luar bingkai) */}
      {post.image_url && (
        <div className="relative mb-10 h-64 w-full md:h-96">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>
      )}

      {/* [PERUBAHAN] Menambahkan div pembungkus untuk bingkai */}
      <div className="rounded-2xl border border-gray-200 p-6 shadow-sm md:p-8">
        {/* Konten Artikel dari CMS/API dengan styling 'prose' */}
        <div
          className="prose prose-lg max-w-prose prose-a:text-green-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
