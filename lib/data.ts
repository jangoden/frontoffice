// lib/data.ts
import { ApiPost } from "@/lib/types";
import { postsData } from "@/lib/postsData";

export async function getPostDetail(slug: string): Promise<ApiPost | null> {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/posts/${slug}`;
    const res = await fetch(apiUrl, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      next: { revalidate: 0 },
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
