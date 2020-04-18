import jsonwebtoken from "jsonwebtoken";

export class JWT {
  public static createToken = <T extends object>(
    obj: T,
    secret: string,
    expiresIn: string
  ): string => {
    return jsonwebtoken.sign(obj, secret, { expiresIn });
  };
  public static verify = (token: string, secret: string): string | object => {
    return jsonwebtoken.verify(token, secret);
  };
  public static checkPermission = (decodedToken: any, permission: string) => {
    return true;
  };
}
