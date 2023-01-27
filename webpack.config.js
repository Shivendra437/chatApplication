const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client'),
  output: {
    path: path.resolve(__dirname, 'dist', 'public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }
    ]
  },
  resolve: {
    extensions: [ '.jsx', '.js' ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'}),
    new HtmlWebPackPlugin({
      template: "./src/client/html/index.html",
      filename: "./index.html"
    })
  ]
};
