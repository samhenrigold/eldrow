const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3500,
  },
};