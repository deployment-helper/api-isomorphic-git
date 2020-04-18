import { Request, Response, Router } from "express";
import { loginSchema } from "../../../validation";
import { ValidationResult } from "@hapi/joi";
import { ErrorBadReq } from "../../../error";
const router = Router();

router.post("/login", (req: Request, resp: Response) => {});

export { router as authRouter };
