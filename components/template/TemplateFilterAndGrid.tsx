"use client";

import React, { useState, useEffect, useCallback } from "react";
// AxiosError tidak lagi dibutuhkan karena kita menggunakan mock apiClient
// import { AxiosError } from "axios";

// --- IMPLEMENTASI TIRUAN UNTUK MEMPERBAIKI KESALAHAN RESOLUSI MODUL ---

// Tipe yang sebelumnya diimpor
// interface Template { id: number; name: string; description: string; category_slug: string; }
// interface TemplateCategory { id: number; name: string; slug: string; }

import apiClient from "@/lib/axios";
import TemplateGrid from "@/components/template/TemplateGrid";
import { Template, TemplateCategory } from "@/app/templates/types";


// --- KODE KOMPONEN ASLI DIMULAI DI SINI ---

// Fungsi untuk mengambil data template dari API
async function fetchTemplates(selectedCategorySlug: string | null): Promise<Template[]> {
  let apiUrl = `/api/v1/templates`;
  if (selectedCategorySlug) {
    apiUrl += `?category=${selectedCategorySlug}`;
  }
  try {
    const res = await apiClient.get(apiUrl);
    return res.data.data || [];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching templates:", error.message);
    } else {
      console.error("An unknown error occurred during template fetching:", error);
    }
    return [];
  }
}

// Fungsi untuk mengambil data kategori dari API
async function fetchCategories(): Promise<TemplateCategory[]> {
  try {
    const res = await apiClient.get(`/api/v1/template-categories`);
    return res.data.data || [];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching categories:", error.message);
    } else {
      console.error("An unknown error occurred during category fetching:", error);
    }
    return [];
  }
}

export default function TemplateFilterAndGrid() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [categories, setCategories] = useState<TemplateCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadTemplates = useCallback(async (categorySlug: string | null) => {
    setLoading(true);
    const fetchedTemplates = await fetchTemplates(categorySlug);
    setTemplates(fetchedTemplates);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Memuat template dan kategori awal
    loadTemplates(null);
    fetchCategories().then(setCategories);
  }, [loadTemplates]);

  const handleCategoryClick = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    loadTemplates(categorySlug);
  };

  return (
    <div className="relative z-10 container mx-auto p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
          Semua Template
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100/80 px-3 py-1 rounded-full sm:bg-transparent sm:px-0 sm:py-0">
          {templates.length} template ditemukan
        </span>
      </div>

      {/* --- Tombol Filter Kategori Gaya Modern --- */}
      <div className="mb-8 flex w-full max-w-max mx-auto flex-wrap items-center justify-center gap-2 rounded-full bg-gray-100 p-1.5">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            !selectedCategory
              ? 'bg-white text-green-700 shadow-md'
              : 'bg-transparent text-gray-600 hover:bg-white/70'
          }`}
        >
          Semua
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category.slug)}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
              selectedCategory === category.slug
                ? 'bg-white text-green-700 shadow-md'
                : 'bg-transparent text-gray-600 hover:bg-white/70'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="py-16 text-center text-gray-500">
          Memuat template...
        </div>
      ) : (
        <TemplateGrid templates={templates} />
      )}
    </div>
  );
}

