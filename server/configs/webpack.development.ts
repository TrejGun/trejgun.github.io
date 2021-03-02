import path from "path";
import {Configuration, HotModuleReplacementPlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import DotEnvPlugin from "dotenv-webpack";

const config: Configuration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    main: ["webpack-hot-middleware/client", "./client"],
  },
  output: {
    path: path.join(__dirname, "..", "..", "dist", "bundle"),
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[id].js",
    publicPath: "/dist/bundle/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    fallback: {
      path: require.resolve("path-browserify"),
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
        test: /\.txt$/i,
        use: "raw-loader",
      },
      {
        test: /\.[tj]sx?$/,
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
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  watchOptions: {
    aggregateTimeout: 0,
  },
};

export default config;
