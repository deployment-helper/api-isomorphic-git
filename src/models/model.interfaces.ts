import { Document } from "mongoose";
import { Request } from "express";
interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  permissions: Array<string>;
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
interface IUpdateUser {
  email?: string;
  firstName?: string;
  lastName?: string;
}
interface JwtRequest extends Request {
  user?: any;
}

interface ICreateEntity {
  entityId: string;
  extraPermission?: Array<string>;
}

interface IAssignRoles {
  role: string;
}

export {
  IUser,
  ILoginReq,
  JwtRequest,
  IChangePassword,
  IUpdateUser,
  ICreateEntity,
  IAssignRoles,
};
