import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { Document } from "mongoose";
import { BaseController } from "../../base.controller";
import {
  IUser,
  JwtRequest,
  IChangePassword,
} from "../../../models/model.interfaces";
import { reqAddUserSchema, reqChangePasswordSchema } from "../../../validation";
import { UserModel } from "../../../models";
import { User as UserCons, BCRYPT } from "../../../constants";
import { ErrorUnAuthorizedAccess } from "../../../errors";

export class UserController extends BaseController {
  constructor() {
    super();
  }
  addUser(req: Request, resp: Response, next: NextFunction) {
    const body: IUser = req.body;
    this.validateReqSchema(reqAddUserSchema, body);
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
  changePassword(req: JwtRequest, resp: Response, next: NextFunction) {
    const body: IChangePassword = req.body;
    let user: any;
    this.validateReqSchema(reqChangePasswordSchema, body);
    if (req.params.email === req.user.email) {
      UserModel.findOne({ email: req.params.email })
        .exec()
        .then(
          (resultDoc): Promise<boolean> => {
            user = resultDoc;
            if (user !== null) {
              return bcrypt.compare(body.oldPassword, user.password);
            } else {
              throw new ErrorUnAuthorizedAccess("User does not exist.");
            }
          }
        )
        .then((isValid: boolean) => {
          if (isValid) {
            try {
              user.password = bcrypt.hashSync(
                body.newPassword,
                BCRYPT.SALT_ROUNDS
              );
              user.save();
              resp.status(200).send(user);
            } catch (error) {
              throw error;
            }
          } else {
            throw new ErrorUnAuthorizedAccess("In-Valid Email or Password");
          }
        })
        .catch((err: Error) => {
          next(err);
        });
    } else {
      throw new ErrorUnAuthorizedAccess(
        "User not autorized to update password."
      );
    }
  }
  updateUserDetails(req: Request, resp: Response, next: NextFunction) {}

  createProject() {}
  assignProjectRoles() {}
  removeProjectRoles() {}
}
