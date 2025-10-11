// Data asli dari API
export type ApiPost = {
  title: string;
  image_url: string | null;
  published_date: string;
  content: string;
  author: string;
  category: string;
  slug: string; // penting: tambahkan slug kalau API memang kasih ini
};

// Data yang sudah ditransformasi untuk komponen
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
