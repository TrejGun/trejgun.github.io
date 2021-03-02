import {config} from "dotenv";

config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test" | "staging";
    }
  }
}
