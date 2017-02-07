Jekyll::Hooks.register :site, :post_write do |site|
  Dir.chdir('_site') {
    result = `sw-precache`
    Jekyll.logger.info 'Generated ServiceWorker'
  }
end
