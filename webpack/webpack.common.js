const { join } = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ScriptExtensionPlugin = require("script-ext-html-webpack-plugin");
// const StylelintPlugin = require("stylelint-webpack-plugin");

const PATH_DIST = join(__dirname, "../dist");

const CONFIG = {
    entry: {
        index: "./index.tsx",
    },

    output: {
        path: PATH_DIST,
        filename: "[name].[hash:8].bundle.js",
        chunkFilename: "[name].[hash:8].chunk.js",
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".svg"],
    },

    optimization: {
        splitChunks: {
            name: true,
            chunks: "all",
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\]node_modules[\\/]/,
                },
            },
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            inject: "body",
            filename: "index.html",
        }),
        // new StylelintPlugin({
        //     configFile: ".stylelintrc",
        // }),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        // }),
        new CleanWebpackPlugin({
            verbose: true,
        }),
        // new ScriptExtensionPlugin({
        //     defaultAttribute: "defer",
        // }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]",
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.ts(x?)|.js|.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "ts-loader",
                    {
                        loader: "eslint-loader",
                        options: {
                            emitWarning: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                    },
                ],
            },
            {
                test: /\.(otf)|.(ttf)|.(png)$/,
                use: ["file-loader"],
            },
        ],
    },
};

module.exports = {
    CONFIG,
    PATH_DIST,
};
