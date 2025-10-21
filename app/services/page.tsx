// app/layanan/page.tsx
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan Kami"
        subtitle="Kami menyediakan berbagai solusi teknologi untuk membantu bisnis Anda berkembang."
      />
      <Services />
    </>
  );
}
