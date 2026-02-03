import type { NextConfig } from "next";

// Fix: Changed type to any to resolve "Cannot use namespace 'NextConfig' as a type" error
const nextConfig: any = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

export default nextConfig;