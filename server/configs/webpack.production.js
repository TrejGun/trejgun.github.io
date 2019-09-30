/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");
const SizePlugin = require("size-plugin");


module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: ["./client"],
  },
  output: {
    path: path.join(__dirname, "..", "..", "dist", "bundle"),
    // filename: "[name].js",
    // sourceMapFilename: "[file].map",
    // chunkFilename: "[id].js",
    publicPath: "/bundle/",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "@material-ui/core": "MaterialUI",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot|svg|gif|png|ico)(\?.+)?$/,
        use: [
          {
            loader: "file-loader?name=[name].[ext]?[hash]",
          },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                [
                  "@babel/env",
                  {
                    targets: {
                      browsers: ["> 1%"],
                    },
                  },
                ],
                [
                  "@babel/typescript",
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
                "@babel/react",
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
    new DotEnvPlugin(),
    new ProgressBarPlugin(),
    new SizePlugin(),
  ],
  performance: {
    hints: false,
  },
  stats: "minimal",
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
