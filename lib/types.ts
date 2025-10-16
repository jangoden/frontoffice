// lib/types.ts

// Tipe untuk data post langsung dari API
export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string | null;
  published_date: string;
  author: string | null;
  category: string | null;
};

// Tipe untuk data post yang sudah disiapkan untuk komponen PostCard
export type PostCardProps = {
  slug: string;
  title: string;
  imageUrl: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
};

// Tipe untuk data post dari API (nama alias agar lebih jelas)
export type ApiPost = Post;
