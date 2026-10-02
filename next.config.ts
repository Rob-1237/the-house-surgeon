import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → Netlify serves /out. No server features (see Next docs: static-exports).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // images are pre-sized WebP in /public
};

export default nextConfig;
