import "./configs/env";

import app from "./configs/express";

import assets from "./routes/common/assets";

import {AddressInfo} from "net";


app.use(assets);

const server = app.listen(process.env.PORT, () => {
  const {port} = server.address() as AddressInfo;
  // eslint-disable-next-line no-console
  console.info(`Express server listening on  http://localhost:${port}/`);
});

// eslint-disable-next-line no-console,@typescript-eslint/unbound-method
process.on("unhandledRejection", console.error);
// eslint-disable-next-line no-console,@typescript-eslint/unbound-method
process.on("uncaughtException", console.error);

export default app;
