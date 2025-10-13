// lib/data.ts
import { ApiPost } from "@/lib/types";
import { postsData } from "@/lib/postsData";
import { siteConfig } from "@/lib/config";

export async function getPostDetail(slug: string): Promise<ApiPost | null> {
  try {
  const apiUrl = `${siteConfig.apiUrl}/api/v1/posts/${slug}`;
    const res = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error(`Error fetching post detail for slug "${slug}":`, err);
    return null;
  }
}
