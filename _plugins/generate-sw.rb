Jekyll::Hooks.register :site, :post_write do |site|
  result = `sw-precache --config=sw-precache-config.js --root=_site`
  Jekyll.logger.info 'Generated ServiceWorker'
end
