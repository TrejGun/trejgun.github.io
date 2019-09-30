import path from "path";
import {Configuration, HotModuleReplacementPlugin} from "webpack";
// eslint-disable-next-line import/default
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// eslint-disable-next-line import/default
import DotEnvPlugin from "dotenv-webpack";


const config: Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "cheap-module-source-map",
  entry: {
    main: ["webpack-hot-middleware/client", "./client"],
  },
  output: {
    path: path.join(__dirname, "..", "..", "dist", "bundle"),
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[id].js",
    publicPath: "/bundle/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg|gif|png|ico)(\?.+)?$/,
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
                    modules: false,
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
              plugins: ["react-hot-loader/babel"],
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
    new HotModuleReplacementPlugin(),
  ],
  performance: {
    hints: false,
  },
  optimization: {
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

export default config;
