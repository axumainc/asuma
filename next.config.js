/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pixelscraper.vercel.app" },
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
};

module.exports = nextConfig;
