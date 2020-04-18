import { Router, Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { userSchema } from "../../../validation";
import { ValidationResult } from "@hapi/joi";
import { ErrorBadReq } from "../../../error";
import { User } from "../../../model";
import { IUser } from "../../../model/model.interfaces";
import logger from "../../../logger";
import { customErrorHandler } from "../../../middleware";
const router: Router = Router();

router.post("/", (req: Request, resp: Response, next: NextFunction) => {
  const body: IUser = req.body;
  const validationResult: ValidationResult = userSchema.validate(body);
  if (validationResult.error) {
    throw new ErrorBadReq(validationResult.error.message);
  }
  const user = new User();
  user.firstName = body.firstName;
  user.lastName = body.lastName;
  user.email = body.email;
  user.password = body.password;
  user
    .save()
    .then((result: Document) => {
      resp.status(200).send(user);
    })
    .catch((err: Error) => {
      next(err);
    });
});
export { router as userRouter };
