/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Enable experimental features
  experimental: {
    // Disable optimizeCss as it's causing issues
    optimizeCss: false,
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  // Improve performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improve SEO
  poweredByHeader: false,
};

export default nextConfig; 