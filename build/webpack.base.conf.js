
var path = require('path');
var config = require('./config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.vue'
        ],
        fallback: [
            path.join(__dirname, '../node_modules')
        ],
        alias: {
            'lib': path.resolve(__dirname, '../lib'),
            'store': path.resolve(__dirname, '../vuex'),
            'assets': path.resolve(__dirname, '../assets'),
            'components': path.resolve(__dirname, '../components')
        }
    },
    resolveLoader: {
        fallback: [
            path.join(__dirname, '../node_modules')
        ]
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.vue$/,
        //         loader: 'eslint',
        //         include: projectRoot,
        //         exclude: /node_modules/
        //     },
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint',
        //         include: projectRoot,
        //         exclude: /node_modules/
        //     }
        // ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: utils.cssLoaders()
    }
}
