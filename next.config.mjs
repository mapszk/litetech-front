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
        hostname: "qwcayblzlqldregoeieu.supabase.co",
        pathname: '/storage/v1/object/public/**',
      }
    ],
  },
};

export default nextConfig;
