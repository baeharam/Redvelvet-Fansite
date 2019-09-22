const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Jarvis = require('webpack-jarvis');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './js/index.js',
    about: './js/about.js',
    photo: './js/photo.js',
    discography: './js/discography.js',
    video: './js/video.js',
  },
  output: {
    filename: '[name].[chunkhash:4].js',
    path: path.join(__dirname, 'dist'),
    publicPath: './',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:4].css' }),
    new Jarvis({ port: 1337 }),
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: './html/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
      template: './html/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['photo'],
      template: './html/photo.html',
      filename: 'photo.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['discography'],
      template: './html/discography.html',
      filename: 'discography.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['video'],
      template: './html/video.html',
      filename: 'video.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[contenthash:4]',
          outputPath: 'assets',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
