const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    entry: "./js/ClientApp.jsx",
    output: {
      filename: "bundle.js",
    },
    plugins: [new HtmlWebPackPlugin(), new webpack.ProgressPlugin()],
  };
};
