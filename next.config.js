/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  