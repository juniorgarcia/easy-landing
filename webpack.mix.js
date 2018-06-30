/*
 * Creating the main .env file.
 */

(() => {
    let fs = require('fs');
    if (!fs.existsSync('.env')) {
        fs.copyFileSync('.env.example', '.env')
    }
})();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// This first steps are done separately to make use of the native Manifest of Laravel Mix
let mix = require('laravel-mix'),
    appEnv = require('./appEnv');
mix.setPublicPath(appEnv.DIST_PATH);

// Enabling version if in production mode before processing assets below.
if (mix.inProduction()) {
    mix.version();
}

let Manifest = require('laravel-mix/src/Manifest'),
    TemplateFunctions = new (require('./TemplateFunctions'))(appEnv, new Manifest);
    mix.pug = require('laravel-mix-pug');

mix.js(`${appEnv.SOURCE_PATH}/scripts/app.js`, `${appEnv.DIST_PATH}/scripts`)
    .sass(`${appEnv.SOURCE_PATH}/styles/app.scss`, `${appEnv.DIST_PATH}/styles`)
    .browserSync({
        files: [
            `${appEnv.DIST_PATH}/**/*.html`
        ],
        serveStatic: [appEnv.DIST_PATH],
        serveStaticOptions: {
            extensions: ["html"]
        }
    })
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
        'popper.js': ['Popper']
    });

mix.pug(`${appEnv.SOURCE_PATH}/templates/*.pug`, appEnv.DIST_PATH, {
    seeds: null,
    locals: Object.assign({
        DEVELOPMENT: !mix.inProduction(),
    }, appEnv, {
        // Globally visible functions from inside of the .pug files.
        getAsset: function (path) {
            return TemplateFunctions.getAsset(path);
        }
    })
});

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
