// app/blog/page.tsx
import BlogList from "@/components/BlogList";
import PageHeader from "@/components/PageHeader";
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
    <main className="relative isolate overflow-hidden bg-white">
      <PageHeader
        title="Wawasan & Inspirasi Terbaru"
        subtitle="Jelajahi artikel kami tentang desain, pengembangan, dan strategi digital."
      />
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 py-20 sm:py-28">
        <BlogList posts={transformedPosts} />
      </div>
    </main>
  );
}
