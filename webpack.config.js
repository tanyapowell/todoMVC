const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: 'babel-loader',
        query: {
          presets: [
            'es2015', 'react'
          ]
        }
      }
    ]
  }
}
