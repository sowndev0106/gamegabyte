import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AWS Amplify hosting configuration
  output: 'standalone',

  // Image optimization for production
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
