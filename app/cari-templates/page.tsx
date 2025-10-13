"use client";

import React, { useState, useEffect, useMemo } from "react";
import LoadingScreen from "../../components/template/LoadingScreen";
import DesainPageHeader, { ApiTemplateCategory } from "../../components/template/DesainPageHeader";
import TemplateGrid from "../../components/template/TemplateGrid";
import { Template } from "./types"; // Pastikan path ke tipe data Template benar
import { siteConfig } from "@/lib/config";

// Fungsi untuk mengambil data template dari API
async function fetchTemplates(categorySlug: string | null): Promise<Template[]> {
  // Bangun URL API secara dinamis
  let apiUrl = `${siteConfig.apiUrl}/api/v1/templates`;
  if (categorySlug) {
    apiUrl += `?category=${categorySlug}`;
  }

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Gagal mengambil data: ${res.statusText}`);
    }
    const response = await res.json();
    // API dengan paginasi biasanya membungkus data dalam properti 'data'
    return response.data || [];
  } catch (error) {
    console.error("Error fetching templates:", error);
    // Kembalikan array kosong jika terjadi error
    return [];
  }
}

// Fungsi untuk mengambil data kategori dari API
async function fetchCategories(): Promise<ApiTemplateCategory[]> {
  const apiUrl = `${siteConfig.apiUrl}/api/v1/template-categories`;
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Gagal mengambil data: ${res.statusText}`);
    }
    const response = await res.json();
    return response.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default function DesainPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [categories, setCategories] = useState<ApiTemplateCategory[]>([]);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect untuk mengambil data saat komponen pertama kali dimuat atau saat filter berubah
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Ambil data kategori (hanya sekali saat awal)
        if (categories.length === 0) {
            const categoryData = await fetchCategories();
            setCategories(categoryData);
        }

        // Ambil data template berdasarkan filter yang dipilih
        const templateData = await fetchTemplates(selectedCategorySlug);
        setTemplates(templateData);

      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan tidak dikenal");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCategorySlug]); // <-- Efek ini akan berjalan lagi setiap kali selectedCategorySlug berubah


  // Fungsi yang akan dikirim ke DesainPageHeader untuk menangani klik pada badge
  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategorySlug(slug);
  };

  const currentCategoryName = useMemo(() => {
    if (!selectedCategorySlug) return "Semua Template";
    const category = categories.find(c => c.slug === selectedCategorySlug);
    return category ? category.name : "Template";
  }, [selectedCategorySlug, categories]);

  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Efek Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-green-50 to-emerald-100/50 -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-200/25 rounded-full blur-lg animate-float-slow"></div>

      <div className="relative z-10 container mx-auto p-4 md:p-8">
        <DesainPageHeader
          categories={categories} // <-- Kirim data kategori dari state
          selectedCategorySlug={selectedCategorySlug}
          onCategorySelect={handleCategorySelect}
        />

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 sm:gap-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
              {currentCategoryName}
            </h2>
            <span className="text-xs sm:text-sm text-gray-500 bg-gray-100/80 px-3 py-1 rounded-full sm:bg-transparent sm:px-0 sm:py-0">
              {templates.length} template ditemukan
            </span>
          </div>
          {/* Tambahan notifikasi jika ada error koneksi */}
          {error && (
            <p className="text-center text-red-500 mb-4">
              Gagal memuat template: {error}
            </p>
          )}
          
          <TemplateGrid templates={templates} />
        </div>
      </div>
    </div>
  );
}