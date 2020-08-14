const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const rootPath = path.resolve(__dirname, '../');
const srcPath = path.resolve(rootPath, 'src');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.resolve(srcPath, 'renderer/index.ts')],
  output: {
    path: path.resolve(rootPath, 'build'),
    filename: 'renderer.js',
  },
  target: 'electron-renderer',
  node: {
    __dirname: false,
    __filename: false,
  },
});
