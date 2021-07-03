Jekyll::Hooks.register :site, :post_write do |site|
  result = 'npx workbox generateSW workbox-config.js'
  Jekyll.logger.info 'Generated ServiceWorker'
end
