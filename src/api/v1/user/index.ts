import { Router, Request, Response, NextFunction } from "express";
import { ValidationResult } from "@hapi/joi";
import { UserController } from "../../../controllers/v1/user";
const router: Router = Router();
const user = new UserController();
// TODO: how to protect open endpoints like signup
router.post("/", user.post.bind(user));
export { router as userRouter };
