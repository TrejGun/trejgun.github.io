import {Options} from "webpack-dev-middleware";

const options: Options = {
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
};

export default options;
