/**
 * @file webpack打包
 * @author mj(zoumiaojiang@baidu.com)
 */

var path = require('path');
var webpack = require('webpack');



module.exports = {

    entry: './src/main.js',

    output: {
        path: './output',
        publicPath: '/output/',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|output|vue-devtools/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },

            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, \
                        optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',
                ]
            },
            {
                test: /\.(woff|eot|ttf|svg)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            }
        ]
    },
    devtool: 'source-map'
};