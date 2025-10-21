// Definisikan juga tipe untuk kategori yang datang dari API
export interface TemplateCategory {
  id: number;
  name: string;
  slug: string;
}

// Update tipe Template
export interface Template {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  // Sesuaikan dengan nama properti dari API (snake_case)
  demo_url: string;
  image_url: string | null;
  // Kategori sekarang adalah sebuah objek, atau bisa jadi null
  category: TemplateCategory | null;
}
