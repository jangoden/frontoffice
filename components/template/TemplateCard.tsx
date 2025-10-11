import React from 'react';
import Image from 'next/image';
import { Template } from '@/app/cari-templates/types'; // Pastikan path ini benar

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  // Fungsi untuk membuka demo di tab baru
  const handleDemoClick = (e: React.MouseEvent) => {
    // Mencegah event bubbling ke elemen parent jika ada
    e.stopPropagation();
    if (template.demo_url) {
      window.open(template.demo_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="group relative block h-full w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      // onClick dihilangkan dari sini agar tidak seluruh card bisa diklik
    >
      <div className="relative h-48 w-full overflow-hidden">
        {template.image_url ? (
          <>
            <Image
              src={template.image_url}
              alt={template.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110" // Efek zoom lebih halus
            />
            {/* Overlay dan Tombol "Lihat Demo" */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
                onClick={handleDemoClick}
                className="translate-y-4 transform rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                Lihat Demo
              </button>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <span className="text-sm text-gray-400">No Image</span>
          </div>
        )}

        {template.category && (
          <div className="absolute top-3 left-3">
            <span className="rounded-md border border-gray-200 bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm">
              {template.category.name}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="truncate font-semibold text-gray-800 group-hover:text-green-600">
          {template.title}
        </h3>
        <p className="mt-1 truncate text-sm text-gray-500">
          {template.description}
        </p>
      </div>
    </div>
  );
}