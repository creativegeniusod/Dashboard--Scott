const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000' 
      },
      {
        test: /\.(png|ttf|eot|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: ExtractTextPlugin.extract('file-loader')
      }
    ]
  },
  resolve: {
    extensions: [".html",
            ".js", ".jsx", ".json",
            ".css", ".sass", ".scss", ".less",
            ".jpeg", ".png", ".gif", ".jpg",],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
