// eslint-disable-next-line import/default
import express from "express";
// eslint-disable-next-line import/default
import morgan from "morgan";


const app = express();

app.disable("x-powered-by");

app.use(
  morgan("tiny", {
    immediate: true,
    skip: () => process.env.NODE_ENV === "test",
  }),
);

export default app;
