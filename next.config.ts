import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/wallet",
        destination: "https://y-wallet-web.vercel.app/wallet",
      },
      {
        source: "/wallet/:path*",
        destination: "https://y-wallet-web.vercel.app/wallet/:path*",
      },
    ];
  },
};

export default nextConfig;