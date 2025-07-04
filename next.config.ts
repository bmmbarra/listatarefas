import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000, // Força a verificação a cada segundo
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;