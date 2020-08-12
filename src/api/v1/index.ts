import { Router } from "express";
import { contentVersionRouter } from "./content-version";
import { healthRouter } from "./health";
const router = Router();
router.use("/", contentVersionRouter);
router.use("/health", healthRouter);

export { router as v1Router };
