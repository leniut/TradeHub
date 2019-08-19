const path = require('path');
const autoprefixer = require("autoprefixer");

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cssOutput = 'site.css';

module.exports = {
    entry: {
        app: './ClientSrc/js/app.js'
        //style: './ClientSrc/js/style.js',
    },
    plugins: [
        new ExtractTextPlugin(cssOutput),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    //  optimization: {
    //   splitChunks: {
    //      // include all types of chunks
    //      chunks: 'all'
    //    }
    //  },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist')
    },
    module: {

    }
};