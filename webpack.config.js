const path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        './js/src/bootstrap.js',
        './js/src/custom.js',
        './js/src/gmap3.js',
        './js/src/owl.carousel.js'
    ],
    output: {
        filename: 'all.min.js',
        path: path.resolve(__dirname, 'js/dist'),
    }
};