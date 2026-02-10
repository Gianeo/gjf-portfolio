import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [80, 88, 90],
  },
};

export default nextConfig;
