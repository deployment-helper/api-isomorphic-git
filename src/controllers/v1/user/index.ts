import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { Document } from "mongoose";
import { BaseController } from "../../base.controller";
import {
  IUser,
  JwtRequest,
  IChangePassword,
  IUpdateUser,
  ICreateEntity,
} from "../../../models/model.interfaces";
import {
  reqAddUserSchema,
  reqChangePasswordSchema,
  reqCreateEntitySchema,
} from "../../../validation";
import { UserModel } from "../../../models";
import { User as UserCons, BCRYPT, User } from "../../../constants";
import { ErrorUnAuthorizedAccess } from "../../../errors";
import { UserHelper } from "../../../helpers/user.helper";
import { EntityHelper } from "../../../helpers/entity.helper";
import { JwtHelper } from "../../../helpers/jwt.helper";
import { Config } from "../../../config";

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
    user.permissions = new Array<string>();
    user.permissions.push(UserCons.DEFAULT_PERMISSION);
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
      /**
       * TODO: should use userHelper for login
       */
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
  updateUserDetails(req: JwtRequest, resp: Response, next: NextFunction) {
    const body: IUpdateUser = req.body;
    const jwtUser: IUser = req.user;
    if (req.params.email === jwtUser.email) {
      UserModel.findOne({ email: jwtUser.email })
        .exec()
        .then((user: IUser | null) => {
          if (user === null) {
            next(new ErrorUnAuthorizedAccess("User not exist."));
            return null;
          } else {
            user.email = body.email ? body.email : user.email;
            user.firstName = body.firstName ? body.firstName : user.firstName;
            user.lastName = body.lastName ? body.lastName : user.lastName;
            return user.save();
          }
        })
        .then((user: IUser | null | undefined) => {
          if (user !== null || user !== undefined) {
            resp.status(200).send(user);
          }
        });
    } else {
      // TODO: Error messages should be standard
      throw new ErrorUnAuthorizedAccess("Not Authorized");
    }
  }

  createEntity(req: JwtRequest, resp: Response, next: NextFunction) {
    const body: ICreateEntity = req.body;
    const jwtUser: IUser = req.user;
    this.validateReqSchema(reqCreateEntitySchema, body);
    if (
      jwtUser.email === req.params.email &&
      JwtHelper.hasPermission(jwtUser.permissions, User.DEFAULT_PERMISSION)
    ) {
      UserModel.findOne({ email: jwtUser.email })
        .exec()
        .then((user: IUser | null) => {
          if (user === null) {
            return null;
          } else {
            const prjHelper = new EntityHelper(body.entityId);
            const permissions = prjHelper.createOwnerPermissions();
            const permissionSet: Set<string> = new Set<string>(
              user.permissions
            );
            permissions.forEach((permission: string) => {
              permissionSet.add(permission);
            });
            user.permissions = Array.from(permissionSet);
            return user.save();
          }
        })
        .then((user: IUser | undefined | null) => {
          if (user === null || user === undefined) {
            next(new ErrorUnAuthorizedAccess("User does not exist"));
          } else {
            resp.status(200).send(user);
          }
        });
    } else {
      throw new ErrorUnAuthorizedAccess("User not autorized");
    }
  }
  assignRoles() {}
  removeRoles() {}
}
