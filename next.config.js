/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-2023" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-2023" : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Force cache busting
  generateBuildId: () => "build-" + Date.now(),
};

module.exports = nextConfig;
