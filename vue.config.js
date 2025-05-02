module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'  // Using relative path for deployment flexibility
    : '/',
}