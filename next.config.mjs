/** @type {import('next').NextConfig} */

const BACKEND_URL = process.env.BACKEND_URL;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: `/api/v1/:path*`,
        destination: `${BACKEND_URL}/:path*`,
      },
    ];
  },
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
