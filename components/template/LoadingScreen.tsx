import React from "react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-green-100/30 via-transparent to-emerald-100/30 animate-pulse"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-screen">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-emerald-100 border-b-emerald-400 rounded-full animate-spin animate-reverse delay-150"></div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Memuat Template Desain
          </h2>
          <p className="text-gray-600 animate-pulse">
            Sedang mengambil koleksi terbaik untuk Anda...
          </p>
        </div>
      </div>
    </div>
  );
}
