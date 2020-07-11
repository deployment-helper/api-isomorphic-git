import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { BaseController } from "../../base.controller";
import { regLoginSchema } from "../../../validation";

import { ErrorUnAuthorizedAccess } from "../../../errors";
import { JWT } from "../../../jwt";
import { Config } from "../../../config";
import { BCRYPT } from "../../../constants";

export class AuthController extends BaseController {
  constructor() {
    super();
  }
  login(req: Request, resp: Response, next: NextFunction) {
    resp.send("Under development");
  }
}
