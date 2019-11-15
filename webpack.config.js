const {VueLoaderPlugin} = require('vue-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {join} = require('path');
const {HotModuleReplacementPlugin} = require('webpack');

module.exports = {

  mode: 'development',
  entry: [
    '@babel/polyfill', './src/app.js',
  ],

  devtool: 'inline-cheap-module-source-map',

  output: {

    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },

  devServer: {
    port: 1002,
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      template: join(__dirname, 'index.html'),
    }),

  ],
};

