let mix = require('laravel-mix');

const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
mix.webpackConfig({
    resolve: {
        alias:{
            '@':resolve('resources/js'),
            '_c':resolve('resources/js/components'),
            // '_conf':resolve('resources/assets/js/config')
        }
    }
});
mix.js('resources/js/app.js', 'public/js/')
    .sass('resources/sass/app.scss', 'public/css/');