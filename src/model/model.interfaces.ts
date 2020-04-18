import { Document } from "mongoose";
import { Request } from "express";
interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  permissions: [string];
  jwtObject: any;
}

interface ILoginReq {
  email: string;
  password: string;
}

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
interface JwtRequest extends Request {
  user?: any;
}
export { IUser, ILoginReq, JwtRequest, IChangePassword };
