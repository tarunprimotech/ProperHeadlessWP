import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo1.primotech.ai",
        port: "", // Keep it empty if not using a custom port
        // pathname: "/Staging/PrimotechAi_Backend/wp-content/uploads/**",
        pathname: "/**",
      },
    ],
  },

  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    TO_EMAIL: process.env.TO_EMAIL,
  },


};


export default nextConfig;
