import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AWS Amplify hosting configuration
  output: 'export',

  // Image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
