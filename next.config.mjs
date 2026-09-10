/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",
  basePath: "/kaushik-portfolio",
  assetPrefix: "/kaushik-portfolio/",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
