const path = require('path');

module.exports = {
  entry: './src/content/content.js',
  output: {
    filename: 'content.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
};
