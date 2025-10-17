// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.warungnyaweb.biz.id",
        port: "", // Kosongkan karena menggunakan port standar (443)
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
