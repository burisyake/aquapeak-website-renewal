import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // App Store のアイコン画像（is1-ssl / is2-ssl ... の複数ホストがある）
    remotePatterns: [{ protocol: "https", hostname: "*.mzstatic.com" }],
  },
};

export default nextConfig;
