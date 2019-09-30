import {config} from "dotenv";


config();

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test" | "staging";
    }
  }
}
