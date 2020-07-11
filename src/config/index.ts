export class Config {
  public static JWT_SECRET: string = process.env.JWT_SECRET
    ? process.env.JWT_SECRET
    : "jwt_secret";
  public static JWT_EXPIRE_TIME: string = process.env.JWT_EXPIRE_TIME
    ? process.env.JWT_EXPIRE_TIME
    : "1h";

  public static CORS_WHITE_LIST: Array<string> = process.env.CORS_WHITE_LIST
    ? process.env.CORS_WHITE_LIST.split(",")
    : ["http://localhost:8000"];
}
