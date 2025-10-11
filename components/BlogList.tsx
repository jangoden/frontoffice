// components/BlogList.tsx

"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import { PostCardProps } from "@/lib/types"; // Sesuaikan path jika perlu


export default function BlogList({ posts }: { posts: PostCardProps[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Input Pencarian */}
      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari artikel berdasarkan judul..."
            className="w-full rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-700 shadow-sm transition-colors duration-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid Postingan */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-gray-500">
          <p className="text-xl font-semibold">Postingan Tidak Ditemukan</p>
          <p className="mt-2 text-sm">Coba gunakan kata kunci yang berbeda.</p>
        </div>
      )}
    </div>
  );
}
