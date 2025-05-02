/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: '',
}

module.exports = nextConfig
