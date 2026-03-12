import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@aerovia/ui", "@aerovia/tokens"]
};

export default nextConfig;
