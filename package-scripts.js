module.exports = {
  scripts: {
    // Default command executed when running `npm start`
    default: 'npm start build && npm start watch',

    // Generates the icon sprite (after SVG optimisation through SVGO)
    icons: [
      'svgo assets/images/icons &&',
      'spritesh',
      '--input assets/images/icons',
      '--output _includes/sprite.svg',
      '--viewbox \'0 0 1024 1024\'',
      '--prefix icon-'
    ].join(' '),

    // Start the Jekyll server for development
    watch: 'bundle exec jekyll s --incremental --config _config.yml,_config.dev.yml',

    // Make sure the code is clean and working
    test: 'npm start js.lint',

    // Build the project
    build: 'npm start js && jekyll build && _bin/testbuild',

    js: {
      default: 'npm start js.build',
      build: 'npm start js.vendors',

      // Copy third-party vendor scripts into the `assets/js/vendor` folder to
      // avoid maintaining our own (possibly outdated) version of these vendor
      // Note: the `picturefill.min.js` script is not copied in the vendor
      //       folder because it is being included in the `<head>` instead of
      //       being bundled in the main JavaScript file like other vendors
      // Note: this task is automatically run after `npm install`
      vendors: [
        'mkdir -p assets/js/vendor',
        'cp node_modules/a11y-dialog/dist/a11y-dialog.min.js assets/js/vendor',
        'cp node_modules/blingdotjs/bling.js assets/js/vendor',
        'cp node_modules/picturefill/dist/picturefill.min.js assets/js'
      ].join(' && '),

      // Run the `standard` linter on all JavaScript files from the JS folder
      // Note: the `assets/js/vendor` folder is naturally omitted by standard
      lint: 'standard assets/js/**/*'
    },

    css: {
      default: 'npm start css.critical && npm start css.clean',

      // Optimise the critical CSS stylesheet to make it as tiny as possible for
      // it to be inlined in the `<head>` of the document
      clean: 'cleancss _includes/critical.css --output _includes/critical.css',

      // Extract all critical styles from the main stylesheet to render “above-
      // the-fold” content as quickly as possible
      // Note: this needs the local server to be running (`npm start`) to work
      //       as it needs a URL to test against
      critical: [
        'criticalcss run',
        '--url http://localhost:4000',
        '--file _site/assets/css/main.css',
        '--forceInclude .chapter__buttons',
        '--output _includes/critical.css'
      ].join(' '),
    }
  }
}
