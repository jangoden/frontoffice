/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/files/**', // <-- TAMBAHKAN INI
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/files/**', // <-- DAN INI
      },
    ],
  },
}

module.exports = nextConfig