var px2rem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        px2rem({
            rootValue: 100,
            propWhiteList: []
        }),
        autoprefixer({
            browsers: ['iOS >= 7', 'Android >= 4.4']

        })
    ]
}