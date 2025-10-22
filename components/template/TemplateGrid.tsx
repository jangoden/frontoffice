import React from 'react';
import TemplateCard from './TemplateCard';
import { Template } from '@/app/templates/types'; 

interface TemplateGridProps {
  templates: Template[];
}

export default function TemplateGrid({ templates }: TemplateGridProps) {

  // Jika tidak ada template, tampilkan pesan
  if (!templates || templates.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="mb-4 text-gray-400">
          <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-600">
          Tidak Ada Template Ditemukan
        </h3>
        <p className="mx-auto mb-6 max-w-md text-gray-500">
          Coba pilih kategori lain atau periksa kembali nanti.
        </p>
      </div>
    );
  }

  // Jika ada template, tampilkan dalam grid
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {templates.map((template, index) => (
        <div
          key={template.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <TemplateCard template={template} />
        </div>
      ))}
    </div>
  );
}
