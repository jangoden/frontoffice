// lib/postsData.ts

export type Post = {
  slug: string; // URL-friendly ID untuk post
  title: string;
  excerpt: string; // Ringkasan singkat untuk daftar blog
  imageUrl: string;
  date: string;
  author: {
    name: string;
    imageUrl: string;
  };
  tags: string[];
  content: string; // Konten artikel dalam format Markdown
};

export const postsData: Post[] = [
  {
    slug: "5-tren-desain-web-terbaru",
    title: "5 Tren Desain Web Terbaru yang Wajib Anda Ketahui",
    excerpt:
      "Dunia desain web terus berkembang. Ketahui 5 tren terbaru yang akan mendominasi tahun ini, mulai dari...",
    imageUrl: "/images/blog/tren-desain.jpg", // Ganti dengan path gambar Anda
    date: "25 Agu 2025",
    author: {
      name: "Admin",
      imageUrl: "/images/authors/admin.png", // Ganti dengan path gambar Anda
    },
    tags: ["Desain Web", "UI/UX"],
    content: `
## 1. Minimalisme dengan Tipografi Ekspresif
Desain yang bersih tetap menjadi raja, namun kini dipadukan dengan *font* yang berani dan ekspresif untuk menciptakan hierarki visual yang kuat.

## 2. Mode Gelap (Dark Mode)
Mode gelap tidak hanya nyaman di mata, tetapi juga memberikan kesan premium dan modern pada website Anda.

## 3. Elemen 3D
Elemen 3D yang interaktif dapat meningkatkan *engagement* pengguna dan memberikan pengalaman yang lebih mendalam.
    
-   Model produk 3D
-   Ilustrasi karakter
-   Animasi latar belakang

\`\`\`javascript
// Contoh kode sederhana
function HelloWorld() {
  console.log("Welcome to the future of web design!");
}
\`\`\`

## 4. Scrolltelling
Menggunakan animasi *scrolling* untuk menceritakan sebuah kisah atau menjelaskan sebuah produk secara bertahap.

## 5. Aksesibilitas (a11y)
Memastikan website dapat digunakan oleh semua orang, termasuk penyandang disabilitas, kini bukan lagi pilihan, melainkan keharusan.
    `,
  },
  // Tambahkan postingan blog lainnya di sini...
];
