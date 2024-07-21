const path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        './js/bootstrap.js',
        './js/custom.js',
        './js/gmap3.js',
        './js/owl.carousel.js'
    ],
    output: {
        filename: 'all.min.js',
        path: path.resolve(__dirname, '_site/js'),
    },
    watch: true,
};