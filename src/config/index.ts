export class Config{
  public static  DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://root:password@127.0.0.1:27017/admin';
}