var path = require('path');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2016", "env"]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
