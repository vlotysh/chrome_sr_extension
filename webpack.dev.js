const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    poll: 500 // Check for changes every second
  },
});
