const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    output: {
      filename: "bundle.js",
    },
    plugins: [new HtmlWebPackPlugin(), new webpack.ProgressPlugin()],
  };
};
