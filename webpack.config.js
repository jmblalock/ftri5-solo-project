const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./js/ClientApp.jsx",
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin(),
    new webpack.ProgressPlugin(),
    new ESLintPlugin(),
  ],
};
