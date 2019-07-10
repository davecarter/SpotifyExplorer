const path = require("path");
const webpack = require("webpack");

const { NODE_ENV } = process.env;

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    server: "./src/server/index.js"
  },
  output: {
    library: "",
    libraryTarget: "commonjs",
    filename: "index.js",
    path: path.resolve(__dirname, "server")
  },
  optimization: {
    nodeEnv: false
  },
  externals: undefined,

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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [new webpack.DefinePlugin({ "global.GENTLY": false })],
  node: {
    __filename: true,
    __dirname: true
  }
};
