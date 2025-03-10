/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static HTML export for Azure Static Web Apps
  distDir: '.next',
  outDir: 'out', // Output directory for the static export
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
    unoptimized: true, // Required for static export
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
  // Trailing slash for better compatibility with static hosting
  trailingSlash: true,
};

export default nextConfig; 