import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { BaseController } from "../../base.controller";
import { loginSchema } from "../../../validation";
import { ILoginReq, IUser } from "../../../model/model.interfaces";
import UserModel from "../../../model/user.model";
import { ErrorUnAuthorizedAccess } from "../../../error";
import { JWT } from "../../../jwt";
import { Config } from "../../../config";
export class AuthController extends BaseController {
  constructor() {
    super();
  }
  login(req: Request, resp: Response, next: NextFunction) {
    const body: ILoginReq = req.body;
    this.validateReqSchema(loginSchema, body);
    UserModel.findOne({ email: body.email })
      .exec()
      .then((user) => {
        if (user !== null) {
          bcrypt
            .compare(body.password, user.password)
            .then((isValid: boolean) => {
              if (isValid) {
                try {
                  const jwt_token = JWT.createToken(
                    user.jwtObject(),
                    Config.JWT_SECRET,
                    Config.JWT_EXPIRE_TIME
                  );
                  resp.status(200).send({ jwt_token });
                } catch (error) {
                  next(error);
                }
              } else {
                next(new ErrorUnAuthorizedAccess("In-Valid Email or Password"));
              }
            });
        } else {
          next(new ErrorUnAuthorizedAccess("User does not exist."));
        }
      })
      .catch((err: Error) => {
        next(err);
      });
  }
}
