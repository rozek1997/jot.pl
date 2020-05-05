const MiniExtractCssPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require("path");

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
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniExtractCssPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniExtractCssPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            }
        ]
    },
    plugins: [
        new MiniExtractCssPlugin({
            exclude: /node_modules/,
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                exclude: /node_modules/,
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    }

}

module.exports = config;