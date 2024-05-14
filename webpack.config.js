const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const tsRule = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: 'ts-loader',
}

const plugins = [
  new HTMLWebpackPlugin({
    template: 'src/popup-page/popup.html',
    filename: 'popup.html',
    chunks: ['popup'],
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: "public", to: "." }
    ],
  }),
  new CleanWebpackPlugin(),
];

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
    roots: [
      resolve('./src'),

    ],
    extensions: ['.ts', '.js', '.tsx'],
  },
  entry: {
    popup: './src/popup-page/popup.tsx',
    contentscript: './src/contentscript.ts',
    service_worker: './src/service_worker.ts',
  },
  watch: true,
  // exclude: 
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [tsRule],
  },
  plugins,
}