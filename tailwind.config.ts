// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Definisi Warna Kustom
      colors: {
        primary: "#FFFFFF",
        secondary: "#111827",
        accent: {
          DEFAULT: "#0066FF",
          hover: "#0052CC",
          light: "#66A3FF",
        },
        lightGray: "#F3F4F6",
        darkGray: "#374151",
        blue: {
          light: "#93C5FD",
          DEFAULT: "#0066FF",
          dark: "#0052CC",
        },
      },
      // Definisi Bayangan (Box Shadow) Kustom
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "custom-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      // Definisi Transisi Kustom
      transitionProperty: {
        "all-smooth": "all",
      },
      transitionDuration: {
        "400": "400ms",
      },
      // Definisi Animasi (Digabungkan)
      animation: {
        // Untuk animasi float pada gambar/lottie
        float: "float 6s ease-in-out infinite",
        // Untuk animasi gradient di background
        "gradient-move": "gradientMove 30s ease infinite alternate",
        "gradient-move-reverse":
          "gradientMoveReverse 35s ease infinite alternate",
      },
      // Definisi Keyframes (Aturan Gerak Animasi) (Digabungkan)
      keyframes: {
        // Keyframes untuk animasi 'float'
        float: {
          "0%, 100%": { transform: "translateY(-3%)" },
          "50%": { transform: "translateY(3%)" },
        },
        // Keyframes untuk animasi 'gradient-move'
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        // Keyframes untuk animasi 'gradient-move-reverse'
        gradientMoveReverse: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
