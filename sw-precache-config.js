module.exports = {
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/\w+.cloudfront.net\/bundles\/\w+.js$/,
      handler: 'cacheFirst'
    }
  ]
}
