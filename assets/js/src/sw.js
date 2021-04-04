;(function () {
  'use strict'

  // Install service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js', { scope: '/' })
      .then(function (registration) {
        console.log(
          '%cserviceworker:registration',
          'color:green',
          `successful with scope: ${registration.scope}`
        )
      })
      .catch(function (error) {
        console.error(
          '%cserviceworker:registration',
          'color:red',
          'failed: ',
          error
        )
      })
  }
})()
