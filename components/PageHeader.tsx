// components/PageHeader.tsx
"use client";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  dateString?: string;
}

export default function PageHeader({ title, subtitle, dateString }: PageHeaderProps) {

  const formattedDate = dateString

    ? new Date(dateString).toLocaleDateString("id-ID", {

        day: "numeric",

        month: "long",

        year: "numeric",

      })

    : "";



  const fullSubtitle = dateString ? `${subtitle} pada ${formattedDate}` : subtitle;



  return (

    <section className="relative bg-emerald-700 pt-10 pb-8 md:pt-12 md:pb-10 text-center text-white overflow-hidden rounded-bl-[4rem] rounded-br-[4rem]">

      {/* Grid Overlay (similar to Hero) */}

      <div

        aria-hidden

        className="absolute inset-0 z-0 opacity-60"

        style={{

          backgroundImage: `

            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),

            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)

          `,

          backgroundSize: "20px 20px",

          WebkitMaskImage:

            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",

          maskImage:

            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",

        }}

      />

      {/* Efek Latar Belakang Halus */}

      <div className="absolute inset-0 z-0 opacity-10">

        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-sky-500 to-transparent blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-full w-full bg-gradient-to-tl from-fuchsia-600 to-transparent blur-3xl"></div>

      </div>



      <div className="container relative z-10 mx-auto px-6">

        <div data-aos="fade-up">

          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">

            {title}

          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">

            {fullSubtitle}

          </p>

        </div>

      </div>

    </section>
  );
}
