// app/page.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSummary from "@/components/ServicesSummary";
// import Bloglist from "@/components/Bloglist";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogList from "@/components/Bloglist";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <ServicesSummary />
      <WhyChooseUs />
      {/* <BlogList /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </main>
  );
}
