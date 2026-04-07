import type { NextConfig } from "next";

const nextConfig: NextConfig = {

   eslint: {
    ignoreDuringBuilds: true, // ✅ build fail nahi hoga
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hyvadata.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lottie.host",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
