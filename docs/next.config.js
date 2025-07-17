/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/berf' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/berf/' : '',
};

module.exports = nextConfig;
