/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add a rewrite to proxy API requests to the Laravel backend in development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8000/api/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      // Allow images from the production backend
      { protocol: 'https', hostname: 'backend.warungnyaweb.biz.id', pathname: '/storage/**' },
      { protocol: 'https', hostname: 'backend.warungnyaweb.biz.id', pathname: '/files/**' },
      // Allow images from the local backend
      { protocol: 'http', hostname: '127.0.0.1', port: '8000', pathname: '/storage/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '8000', pathname: '/files/**' },
    ],
  },
  reactStrictMode: true,
  // The env block that forced the production URL has been removed.
  turbopack: {
    // Explicitly set the root to the current directory of next.config.js
    // to resolve the "multiple lockfiles" warning.
    root: __dirname,
  },
};

module.exports = nextConfig;