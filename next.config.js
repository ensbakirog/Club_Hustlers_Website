/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath for GitHub Pages deployment, not for custom domain
  basePath: process.env.GITHUB_ACTIONS ? '/Duo_Portfolio' : '',
  // For custom domain deployments, ensure images work correctly
  images: {
    unoptimized: true,
  },
  // This helps resolve the issue with trailing slashes in routes
  trailingSlash: true,
}

module.exports = nextConfig
