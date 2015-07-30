const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      {
        test: /(.js|.jsx)/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0&cacheDirectory=true']
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, '/src'),
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'cheap-module-eval-source-map'
};

module.exports = config;
