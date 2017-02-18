module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss?$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
