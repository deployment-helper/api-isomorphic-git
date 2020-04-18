export class Config {
  public static DB_CONNECTION_STRING = process.env.DATABASE_NAME
    ? `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASWORD}@${process.env.DB_DOMAIN}`
    : "mongodb://root:password@127.0.0.1:27017/admin";
  public static JWT_SECRET = process.env.JWT_SECRET
    ? process.env.JWT_SECRET
    : "jwt_secret";
  public static JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME
    ? process.env.JWT_EXPIRE_TIME
    : "2h";
}
