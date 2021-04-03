Jekyll::Hooks.register :site, :post_write do |site|
  result = `./node_modules/.bin/workbox generateSW workbox-config.js`
  Jekyll.logger.info 'Generated ServiceWorker'
end
