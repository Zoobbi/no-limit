/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/no-limit',
  output: 'export',
  basePath: "/no-limit",
  assetPrefix:"/no-limit",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
