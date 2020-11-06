const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist/build'),
    filename: '[name].min.js'
  },
  mode: 'production',
});