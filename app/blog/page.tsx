// app/blog/page.tsx
import BlogList from "@/components/BlogList";
import type { ApiPost, PostCardProps } from "@/lib/types";
import { getPosts } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const apiPosts: ApiPost[] = await getPosts();

  const transformedPosts: PostCardProps[] = apiPosts.map((post: ApiPost) => ({
    slug: post.slug,
    title: post.title,
    imageUrl: post.image_url || "/placeholder-image.jpg",
    date: post.published_date,
    excerpt: (post.content || "").replace(/<[^>]*>?/gm, "").substring(0, 100) + "...",
    author: { name: post.author || "Penulis" },
    category: { name: post.category || "Tutorial" },
  }));

  return (
    <main className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Wawasan & Inspirasi
            </span>{" "}
            Terbaru
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Jelajahi artikel kami tentang desain, pengembangan, dan strategi digital.
          </p>
        </div>

        <BlogList posts={transformedPosts} />
      </div>
    </main>
  );
}
