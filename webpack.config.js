const path = require("path");
const MiniExtractCssPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    "lodash"
]

const config = {
    mode: "development",
    entry: {
        bundle: "./src/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/i,
                use: [MiniExtractCssPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniExtractCssPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new MiniExtractCssPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
    optimization: {}

}

module.exports = config;