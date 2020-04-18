import { Request, Response, Router } from "express";
import { loginSchema } from "../../../validation";
import { ValidationResult } from "@hapi/joi";
import { ErrorBadReq } from "../../../error";
const router = Router();
router.post("/", (req: Request, resp: Response) => {
  resp.send("Under Development");
});

export { router as authRouter };
