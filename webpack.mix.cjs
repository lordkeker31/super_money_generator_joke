const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('frontend/src/index.js', 'public/js')
    .react();
    //.css('frontend/src/index.css', 'public/css');
    //.sass('resources/sass/app.scss', 'public/css')
    //.css('resources/css/app.css', 'public/css')
if (mix.inProduction()) {
    mix.version();
} else {
    mix.browserSync({
        proxy: 'localhost:4000',
        files: [
            'app/**/*.php',
            'resources/views/**/*.blade.php',
            'public/js/**/*.js',
            'public/css/**/*.css',
            'frontend/src/**/*.js',
            'frontend/src/**/*.jsx',
            'frontend/src/**/*.css'
        ],
        open: false
    });
}