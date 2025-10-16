/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ Unsplash images
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // ✅ Pixabay images (optional)
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ Cloudinary support (future-proof)
      },
    ],
  },
  experimental: {
    appDir: true, // optional, modern Next.js 14+ feature
  },
};

module.exports = nextConfig;
