/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src"),
  mode: process.env.NODE_ENV,

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "js/[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      fileName: path.join(__dirname, "/dist"),
      minify: true,
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
  ],
};
