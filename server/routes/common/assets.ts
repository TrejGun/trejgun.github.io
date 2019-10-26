import path from "path";
import {Router, static as serveStatic} from "express";
import webpack from "../../configs/webpack";


const router = Router(); // eslint-disable-line new-cap

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  router.use("/dist", serveStatic(path.join(__dirname, "../../../dist")));
}

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  router.use(webpack);
}

router.use("/", serveStatic(path.join(__dirname, "../../../")));
router.use("/*", serveStatic(path.join(__dirname, "../../../")));

export default router;
