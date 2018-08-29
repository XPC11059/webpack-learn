const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: __dirname + "/public/main.js", //唯一入口文件
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        port: 8080
    },
    // module: {
    //     rules: [{
    //         test: /(\.jsx|\.js)$/,
    //         use: {
    //             loader: "babel-loader"
    //         },
    //         exclude: /node_modules/
    //     }, {
    //         test: /\.css$/,
    //         use: ExtractTextPlugin.extract({
    //             fallback: "style-loader",
    //             use: [{
    //                 loader: "css-loader",
    //                 options: {
    //                     modules: true,
    //                     localIdentName: '[name]__[local]--[hash:base64:5]'
    //                 }
    //             }, {
    //                 loader: "postcss-loader"
    //             }],
    //         })
    //     }]
    //     }
    }
