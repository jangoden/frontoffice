// app/blog/[slug]/page.tsx

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "default-no-store";

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPostDetail } from "@/lib/data";
import PostHeader from "@/components/blog/post-header";
import PostBody from "@/components/blog/post-body";
import PostFooter from "@/components/blog/post-footer";
import JsonLd from "@/components/blog/json-ld";
import { stripHtml } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

// ✅ Next 15.5: params adalah Promise
type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params; // ✅ wajib await
  const post = await getPostDetail(slug);
  if (!post) return { title: "Artikel tidak ditemukan" };

  const siteUrl = siteConfig.siteUrl || "";
  const shareUrl = `${siteUrl}/blog/${post.slug}`;
  const description = stripHtml(post.content).slice(0, 160);

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: shareUrl,
      images: post.image_url ? [{ url: post.image_url }] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.image_url ? [post.image_url] : undefined,
    },
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params; // ✅ wajib await
  const post = await getPostDetail(slug);
  if (!post) notFound();

  const siteUrl = siteConfig.siteUrl || "";
  const shareUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <>
      <main className="bg-white px-6 py-20 sm:py-28">
        <article className="mx-auto max-w-3xl">
          <PostHeader post={post} />
          <PostBody post={post} />
          <PostFooter post={post} shareUrl={shareUrl} />
        </article>
      </main>

      <JsonLd post={post} url={shareUrl} />
    </>
  );
}
