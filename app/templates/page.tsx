import React from "react";

import TemplateGrid from "../../components/template/TemplateGrid";
import { Template } from "./types"; // Pastikan path ke tipe data Template benar

import apiClient from "@/lib/axios";
import { AxiosError } from "axios";
import PageHeader from "@/components/PageHeader";

// Fungsi untuk mengambil data template dari API
async function fetchTemplates(): Promise<Template[]> {
  const apiUrl = `/api/v1/templates`;
  try {
    const res = await apiClient.get<{
      data: Template[];
    }>(apiUrl);
    return res.data.data || [];
  } catch (error) {
    const axiosError = error as AxiosError;
    interface ErrorResponseData { message?: string; }
    let errorMessage = 'Network Error';
    if (axiosError.response) {
      errorMessage = `${axiosError.response.status} - `;
      if (axiosError.response.data && typeof axiosError.response.data === 'object') {
        errorMessage += (axiosError.response.data as ErrorResponseData).message || JSON.stringify(axiosError.response.data);
      } else if (axiosError.response.data) {
        errorMessage += axiosError.response.data;
      } else {
        errorMessage += 'Unknown error';
      }
    } else if (axiosError.message) {
      errorMessage = axiosError.message;
    }
    console.error("Error fetching templates:", errorMessage);
    return [];
  }
}

export default async function DesainPage() {
  const templates = await fetchTemplates();

  return (
    <>
      <PageHeader
        title="Cari Desain Template untuk Bisnis Impian Anda"
        subtitle="Jelajahi galeri template eksklusif kami untuk menemukan inspirasi sempurna bagi proyek website profesional Anda berikutnya."
      />
      <div className="relative z-10 container mx-auto p-4 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
            Semua Template
          </h2>
          <span className="text-xs sm:text-sm text-gray-500 bg-gray-100/80 px-3 py-1 rounded-full sm:bg-transparent sm:px-0 sm:py-0">
            {templates.length} template ditemukan
          </span>
        </div>
        <TemplateGrid templates={templates} />
      </div>
    </>
  );
}