/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Izinkan memuat gambar dari backend Laravel (local dan production)
    remotePatterns: [
      // ==== LOCAL DEVELOPMENT (Laravel di localhost:8000) ====
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/post-images/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/files/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/post-images/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/files/**',
      },

      // ==== PRODUCTION (Laravel di backend.warungnyaweb.biz.id) ====
      {
        protocol: 'https',
        hostname: 'backend.warungnyaweb.biz.id',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'backend.warungnyaweb.biz.id',
        pathname: '/storage/post-images/**',
      },
      {
        protocol: 'https',
        hostname: 'backend.warungnyaweb.biz.id',
        pathname: '/files/**',
      },
    ],
  },

  // Opsional tapi direkomendasikan: aktifkan strict mode
  reactStrictMode: true,

  // Aktifkan minifikasi dan optimasi build Vercel
  swcMinify: true,

  // (Opsional) kalau pakai env variable API URL di client
  env: {
    NEXT_PUBLIC_API_BASE_URL: 'https://backend.warungnyaweb.biz.id/api',
  },
};

module.exports = nextConfig;
