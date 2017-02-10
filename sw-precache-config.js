module.exports = {
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/(.*?).cloudfront.net\/bundles\/(.*?).js$/,
      handler: 'networkFirst'
    }
  ]
}
