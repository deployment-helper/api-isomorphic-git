import { Document } from "mongoose";
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
export { IUser, ILoginReq };
