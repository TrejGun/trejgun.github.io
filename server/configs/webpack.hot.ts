import config from "./webpack.development";
import {Options} from "webpack-dev-middleware";


const options: Options = {
  // @ts-ignore
  publicPath: config.output.publicPath,
  stats: {
    assets: true,
    colors: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
    version: true,
  },
  watchOptions: {
    aggregateTimeout: 0,
  },
};

export default options;
