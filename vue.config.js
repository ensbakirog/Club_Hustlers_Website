module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'  // Changed from your custom domain to relative path
    : '/',
}