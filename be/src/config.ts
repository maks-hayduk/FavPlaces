import dotenv, { DotenvParseOutput } from 'dotenv';

const { 
  DB_PASSWORD, 
  DB_USERNAME, 
  DB_NAME, 
  DB_HOST,
  DB_PORT,
  SECRET_KEY
} = dotenv.config().parsed as DotenvParseOutput;

export default Object.freeze({
  dbPassword: DB_PASSWORD,
  dbUsername: DB_USERNAME,
  dbName: DB_NAME,
  dbHost: DB_HOST,
  dbPort: DB_PORT,
  secretKey: SECRET_KEY
});
