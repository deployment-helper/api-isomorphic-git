import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { Document } from "mongoose";
import { BaseController } from "../../base.controller";
import { IUser } from "../../../model/model.interfaces";
import { userSchema } from "../../../validation";
import { UserModel } from "../../../model";
import { User as UserCons, BCRYPT } from "../../../constants";

export class UserController extends BaseController {
  constructor() {
    super();
  }
  post(req: Request, resp: Response, next: NextFunction) {
    const body: IUser = req.body;
    this.validateReq(userSchema, body);
    const user = new UserModel();
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;
    user.password = bcrypt.hashSync(body.password, BCRYPT.SALT_ROUNDS);
    user.permissions = [UserCons.DEFAULT_SCOPE];
    user
      .save()
      .then((result: Document) => {
        resp.status(200).send(user);
      })
      .catch((err: Error) => {
        next(err);
      });
  }
}
