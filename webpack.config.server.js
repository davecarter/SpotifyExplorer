const webpack = require("webpack");
const webpackNodeExternals = require("webpack-node-externals");
const path = require("path");

let webpackConfig = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
  },
  entry: "./server/server.js",
  target: "node",
  output: {
    path: path.resolve(process.cwd(), "build"),
    chunkFilename: "[name].[chunkhash:8].js",
    filename: "[name].[chunkhash:8].js"
  },
  optimization: {
    nodeEnv: false
  },
  externals: [webpackNodeExternals()],
  plugins: [new webpack.DefinePlugin({ "global.GENTLY": false })],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              compact: true,
              presets: [require.resolve("babel-preset-sui")]
            }
          },
          require.resolve("source-map-loader")
        ]
      },
      {
        // ignore css/scss require/imports files in the server
        test: /\.s?css$/,
        use: ["null-loader"]
      }
    ]
  }
};

module.exports = webpackConfig;
