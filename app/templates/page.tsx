import React from "react";

import PageHeader from "@/components/PageHeader";
import TemplateFilterAndGrid from "../../components/template/TemplateFilterAndGrid";
export default function DesainPage() {
  return (
    <>
      <PageHeader
        title="Cari Desain Template untuk Bisnis Impian Anda"
        subtitle="Jelajahi galeri template eksklusif kami untuk menemukan inspirasi sempurna bagi proyek website profesional Anda berikutnya."
      />
      <TemplateFilterAndGrid />
    </>
  );
}