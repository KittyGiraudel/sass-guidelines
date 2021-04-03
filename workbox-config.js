module.exports = {
  swDest: '_site/service-worker.js',
  globPatterns: ['_site/**/*.html', '_site/assets/css/*.css'],
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/\w+.cloudfront.net\/bundles\/\w+.js$/,
      handler: 'StaleWhileRevalidate'
    }
  ]
}
