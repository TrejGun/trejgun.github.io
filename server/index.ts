import "./configs/env";

import app from "./configs/express";

import assets from "./routes/common/assets";

import {AddressInfo} from "net";

app.use(assets);

const server = app.listen(process.env.PORT, () => {
  const {port} = server.address() as AddressInfo;
  console.info(`Express server listening on  http://localhost:${port}/`);
});

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

export default app;
