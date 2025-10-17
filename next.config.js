/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'backend.warungnyaweb.biz.id', pathname: '/storage/**' },
      { protocol: 'https', hostname: 'backend.warungnyaweb.biz.id', pathname: '/files/**' },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // TANPA /api
    NEXT_PUBLIC_API_BASE_URL: 'https://backend.warungnyaweb.biz.id',
  },
};

module.exports = nextConfig;
