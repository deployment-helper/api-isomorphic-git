export class Config{
  public static  DB_CONNECTION_STRING = process.env.DATABASE_NAME ? `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASWORD}@${process.env.DB_DOMAIN}` : 'mongodb://root:password@127.0.0.1:27017/admin';
}