export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "default-no-store";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostDetail } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import PostHeader from "@/components/blog/post-header";
import PostBody from "@/components/blog/post-body";
import PostFooter from "@/components/blog/post-footer";
import JsonLd from "@/components/blog/json-ld";
import { stripHtml } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

type PageParams = { params: { slug: string } };

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const post = await getPostDetail(params.slug);
  if (!post) return { title: "Artikel tidak ditemukan" };

  const shareUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;
  const description = stripHtml(post.content || "").slice(0, 160);

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

export default async function PostDetailPage({ params }: PageParams) {
  const post = await getPostDetail(params.slug);
  if (!post) notFound();

  const shareUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;

  return (
    <>
      <main className="bg-white px-6 pb-20 sm:pb-28">
        <article className="mx-auto max-w-3xl">
      <PageHeader
        title={post.title}
        subtitle={`Oleh ${post.author}`}
        dateString={post.published_date}
      />
          <PostBody post={post} />
          <PostFooter post={post} shareUrl={shareUrl} />
        </article>
      </main>
      <JsonLd post={post} url={shareUrl} />
    </>
  );
}
