"use client";

// components/PostCard.tsx

import Link from "next/link";
import Image from "next/image";
import { PostCardProps } from "@/lib/types"; // Sesuaikan path jika perlu

export default function PostCard({ post }: { post: PostCardProps }) {
  return (
    <div className="group flex transform flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Gambar Postingan */}
      <Link href={`/blog/${post.slug}`} className="relative block h-48 w-full">
        <Image
          src={post.imageUrl}
          alt={`Gambar untuk ${post.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </Link>

      {/* Konten Teks */}
      <div className="flex flex-1 flex-col p-4">
        {/* Badge Kategori */}
        <div className="mb-4">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800">
            {post.category.name}
          </span>
        </div>

        {/* Judul Postingan */}
        <h3 className="mb-3 text-xl font-bold leading-snug text-gray-800">
          <Link href={`/blog/${post.slug}`} className="hover:text-green-600">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mb-5 flex-1 text-base text-gray-600 line-clamp-1 overflow-hidden text-ellipsis">{post.excerpt}</p>

        {/* Info Author dan Tanggal */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            {/* Icon untuk author */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              {post.author.name}
            </span>
          </div>

          {/* [PERUBAHAN DI SINI] Tambah ikon kalender */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5m18 7.5v-7.5"
              />
            </svg>
            <span>
              {new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
