# Sass Guidelines

## Run it locally

```sh
bundle install
npm install
npm start
# http://localhost:4000
```

## npm tasks documentation

### `start`

Runs the [`build`](#build) task and then the [`watch`](#watch) task. It is used when cloning the project for the first time in order to work on it. After the first time, you can run the [`watch`](#watch) task only.

### `watch`

Runs Jekyll in development mode (local environment, file watcher, dev config, incremental build).

### `build`

Runs the [`icons`](#icons), [`js:build`](#jsbuild)  tasks.

npm automatically executes the `postbuild` task after the `build` task. The `postbuild` task runs the `bin/testbuild` Bash script. This script makes sure the build happened correctly.

### `icons`

Generates `_includes/sprite.svg`.

npm automatically executes the `preicons` task before the `icons` task. The `preicons` task runs [svgo](https://github.com/ajstarks/svgo) to optimise SVG files before building the sprite.

### `css:critical`

Generates `_includes/critical.css`.

### `js:build`

Runs the [`js:lint`](#jslint), [`js:vendors`](#jsvendords), [`js:main`](#jsmain), [`js:utilities`](#jsutilities) tasks.

### `js:vendors`

Copies third-party vendor scripts into the JavaScript folder ([accessible-modal-dialog](https://github.com/edenspiekermann/accessible-modal-dialog), [blingdotjs](https://gist.github.com/HugoGiraudel/7d867cda127e64d38f28), [picturefill](https://github.com/scottjehl/picturefill)).

The `picturefill.min.js` is not copied in the vendor folder because it is being included in the `<head>` instead of being bundled in the main JavaScript file like other vendors.

npm automatically executes this task after `npm install`.

### `js:utilities`

Generates `_includes/utilities.js` from third-party vendor scripts ([loadCSS](https://github.com/filamentgroup/loadCSS), [woff2-feature-test](https://github.com/filamentgroup/woff2-feature-test), [OptimizedWebfontLoading](https://gist.github.com/HugoGiraudel/2a65d6a37675412a2463)). These utilities are being inlined in the `<head>` instead of being bundled in the main JavaScript file.

### `js:main`

Generates the minified main JavaScript file with [rollup](http://rollupjs.org/).

### `js:lint`

Runs [semistandard](https://github.com/Flet/semistandard) on the JavaScript source folder.

---

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
