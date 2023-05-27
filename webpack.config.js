console.log('webpack.config.js');
const path = require('path');
// webpack.config.js
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      url: require.resolve('url'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      // Add your webpack rules for JavaScript/TypeScript, CSS, etc.
    ],
  },

  // Add any additional webpack configuration options as needed
};
