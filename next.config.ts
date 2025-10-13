// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "serveratech.cloud",
        port: "", // Kosongkan karena menggunakan port standar (443)
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;