const webpack = require('webpack');
const merge = require('webpack-merge');

const { CONFIG, PATH_DIST } = require('./webpack.common.js');

const HOST = 'localhost';
const PORT = 3000;

module.exports = (env) =>
    merge(CONFIG, {
        mode: 'development',
        devtool: 'cheap-module-source-map',

        plugins: [new webpack.HotModuleReplacementPlugin()],

        devServer: {
            port: PORT,
            host: HOST,
            hot: true,
            compress: true,
            historyApiFallback: true,
            contentBase: PATH_DIST,
            watchContentBase: true,
        },
    });
