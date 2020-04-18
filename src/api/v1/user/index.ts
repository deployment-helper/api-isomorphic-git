import { Router, Request, Response, NextFunction } from "express";
import { ValidationResult } from "@hapi/joi";
import { UserController } from "../../../controllers/v1/user";
const router: Router = Router();
const user = new UserController();
// TODO: how to protect open endpoints like signup
router.post("/", user.addUser.bind(user));
router.put("/:email/change-password", user.changePassword.bind(user));
router.put("/:email/update-user");
router.post("/:email/project/:projectId");
router.put("/:email/project/:projectId/add-roles");

export { router as userRouter };
