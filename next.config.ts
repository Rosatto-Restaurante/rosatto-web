import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [] },
  // Turbopack ya es el motor por defecto en dev; esta línea es opcional:
  turbopack: {},
};

export default nextConfig;
  