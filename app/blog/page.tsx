// app/blog/page.tsx

import BlogList from "@/components/BlogList";
import { ApiPost, PostCardProps } from "@/lib/types";
import { siteConfig } from "@/lib/config";

// Fungsi untuk mengambil data dari API
async function getPosts(): Promise<ApiPost[]> {
  try {
  const apiUrl = `${siteConfig.apiUrl}/api/v1/posts`;
  const res = await fetch(apiUrl, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error("Gagal mengambil data postingan, status:", res.status);
      return [];
    }

    const response = await res.json();
    return response.data || [];
  } catch (error) {
    console.error("Error di getPosts():", error);
    return [];
  }
}

export default async function BlogPage() {
  const apiPosts = await getPosts();

  // [PERUBAHAN] Sertakan data author dan category saat transformasi data
  const transformedPosts: PostCardProps[] = apiPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    imageUrl: post.image_url || "/placeholder-image.jpg",
    date: post.published_date,
    excerpt: post.content.replace(/<[^>]*>?/gm, "").substring(0, 100) + "...",
    author: {
      name: post.author || "Penulis", // Mengambil nama author dari API
    },
    category: {
      // Mengambil kategori dari API, jika tidak ada, gunakan 'Tutorial'
      name: post.category || "Tutorial",
    },
  }));

  return (
    <main className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      {/* Elemen Latar Belakang */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-12 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#34d399] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Header Halaman */}
        <div className="mb-14 text-center">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Wawasan & Inspirasi
            </span>{" "}
            Terbaru
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Jelajahi artikel kami tentang desain, pengembangan, dan strategi
            digital.
          </p>
        </div>

        {/* Menampilkan daftar blog dengan fitur pencarian */}
        <BlogList posts={transformedPosts} />
      </div>
    </main>
  );
}
