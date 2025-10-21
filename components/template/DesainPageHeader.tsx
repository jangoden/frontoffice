import React from 'react';

// 1. Tipe data baru untuk kategori yang datang dari API Laravel kita
// Definisikan tipe ini agar kodemu lebih aman dan mudah dibaca.
export type ApiTemplateCategory = {
  id: number;
  name: string;
  slug: string;
};

// 2. Props diupdate untuk menerima array dari tipe data baru di atas
interface DesainPageHeaderProps {
  categories: ApiTemplateCategory[]; // Menerima data dinamis dari API
  selectedCategorySlug: string | null; // Kita lacak berdasarkan slug
  onCategorySelect: (slug: string | null) => void; // Fungsi untuk mengubah filter
}

export default function DesainPageHeader({
  categories,
  selectedCategorySlug,
  onCategorySelect,
}: DesainPageHeaderProps) {

  // 3. Fungsi styling yang JAUH lebih sederhana. Tidak ada lagi colorMap!
  const getCategoryClasses = (isSelected: boolean) => {
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap shadow-sm";
    
    if (isSelected) {
      // Kelas untuk badge yang aktif/terpilih
      return `${baseClasses} bg-green-600 text-white`;
    }
    
    // Kelas untuk badge yang tidak aktif
    return `${baseClasses} bg-gray-100 text-gray-800 hover:bg-gray-200`;
  };

  return (
    <div className="text-center mb-6 md:mb-10 pt-2 md:pt-4 px-4">
      {/* Bagian judul, subjudul, dan search tidak perlu diubah */}
      <div className="inline-block mb-2 md:mb-4">
        <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-xs sm:text-sm font-semibold tracking-wide uppercase px-4 py-1 rounded-full">
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Koleksi Premium
          </span>
        </span>
      </div>
      
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-2 md:mb-4 leading-tight">
        Cari Desain Template untuk Bisnis
        <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent sm:mt-2">
          Impian Anda
        </span>
      </h1>
      
      <p className="text-sm sm:text-lg leading-6 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
        Jelajahi galeri template eksklusif kami untuk menemukan inspirasi
        sempurna bagi proyek website profesional Anda berikutnya.
      </p>

      <div className="max-w-3xl mx-auto mt-6 md:mt-8">
        <div className="relative">
          <div className="flex items-center">
            <div className="relative flex-1">
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Fitur pencarian akan datang..."
                className="w-full py-3 sm:py-4 pl-12 pr-4 text-base sm:text-lg rounded-2xl border-2 border-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-sm"
              />
            </div>
            <button className="ml-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 sm:py-4 px-5 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.03] shadow-sm hover:shadow flex items-center font-medium">
              <span className="hidden sm:inline mr-2">Cari</span>
            </button>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8">
          <p className="text-sm text-gray-600 mb-3 font-medium text-center">
            Tema Website Populer:
          </p>
          
          <div className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {/* 4. Logika .map() diupdate untuk menggunakan data dari props */}
            <div className="flex flex-nowrap md:flex-wrap md:justify-center items-center gap-2 md:gap-3 min-w-max md:min-w-0">
              {/* Tombol "Semua" untuk membersihkan filter */}
              <button
                className={getCategoryClasses(selectedCategorySlug === null)}
                onClick={() => onCategorySelect(null)}
              >
                Semua
              </button>

              {/* Mapping kategori dari API */}
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={getCategoryClasses(selectedCategorySlug === cat.slug)}
                  // 5. onClick sekarang mengirim slug, bukan nama
                  onClick={() => onCategorySelect(cat.slug)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
