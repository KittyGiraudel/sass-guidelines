# Sass Guidelines

[![Greenkeeper badge](https://badges.greenkeeper.io/HugoGiraudel/sass-guidelines.svg)](https://greenkeeper.io/)

An opinionated styleguide for writing sane, maintainable and scalable Sass.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

The code for this project is [licensed under MIT](LICENSE).
The content for this project is [licensed by Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode).

## Local development

```sh
bundle install
npm install
npm start
# http://localhost:4000
```

## npm tasks

* `start`: runs the [`build`](#build) task and then the [`watch`](#watch) task. It is used when cloning the project for the first time in order to work on it. After the first time, you can run the [`watch`](#watch) task only.
* `watch`: runs Jekyll in development mode (local environment, file watcher, dev config, incremental build).
* `build`: runs the [`icons`](#icons), [`js:build`](#jsbuild)  tasks. npm automatically executes the `postbuild` task after the `build` task. The `postbuild` task runs the `bin/testbuild` Bash script. This script makes sure the build happened correctly.
* `icons`: Generates `_includes/sprite.svg`. npm automatically executes the `preicons` task before the `icons` task. The `preicons` task runs [svgo](https://github.com/ajstarks/svgo) to optimise SVG files before building the sprite.
* `css:critical`: Generates `_includes/critical.css`.
* `js:build`: Runs the [`js:lint`](#jslint), [`js:vendors`](#jsvendords), [`js:main`](#jsmain), [`js:utilities`](#jsutilities) tasks.
* `js:vendors`: Copies third-party vendor scripts into the JavaScript folder ([accessible-modal-dialog](https://github.com/edenspiekermann/accessible-modal-dialog), [blingdotjs](https://gist.github.com/HugoGiraudel/7d867cda127e64d38f28), [picturefill](https://github.com/scottjehl/picturefill)). The `picturefill.min.js` is not copied in the vendor folder because it is being included in the `<head>` instead of being bundled in the main JavaScript file like other vendors. npm automatically executes this task after `npm install`.
* `js:utilities`: Generates `_includes/utilities.js` from third-party vendor scripts ([loadCSS](https://github.com/filamentgroup/loadCSS), [woff2-feature-test](https://github.com/filamentgroup/woff2-feature-test), [OptimizedWebfontLoading](https://gist.github.com/HugoGiraudel/2a65d6a37675412a2463)). These utilities are being inlined in the `<head>` instead of being bundled in the main JavaScript file.
* `js:main`: Generates the minified main JavaScript file with [rollup](http://rollupjs.org/).
* `js:lint`: Runs [standard](https://github.com/feross/standard) on the JavaScript source folder.
