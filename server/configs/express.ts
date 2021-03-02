import express from "express";
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
