// lib/types.ts

export interface ApiPost {
  id: number;
  title: string;
  slug: string;
  content: string;              // HTML string
  author: string;
  category: string;
  image_url: string | null;     // bisa null
  published_at: string;         // ISO 8601
  published_date: string;       // human readable (e.g., "16 October 2025")
}

export interface PostCardProps {
  slug: string;
  title: string;
  imageUrl: string;
  date: string;
  excerpt: string;
  author: { name: string };
  category: { name: string };
}

export interface ApiListResponse<T> { data: T[] }
export interface ApiDetailResponse<T> { data: T }
