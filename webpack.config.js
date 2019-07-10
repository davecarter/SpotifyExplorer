const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV, CDN } = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  },
  output: {
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].js",
    publicPath: CDN,
    path: path.resolve(__dirname, "public")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.join(__dirname, "node_modules"),
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      "process.env.CDN": JSON.stringify(CDN)
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[id].[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyURLs: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};
