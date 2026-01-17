/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lite-tech-api.litebox.ai",
      },
      {
        protocol: "https",
        hostname: "litetech-assets.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
