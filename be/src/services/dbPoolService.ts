import pg from 'pg';

import config from '../config';

const Pool = pg.Pool;

const pool = new Pool({
  user: config.dbUsername,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: Number(config.dbPort)
});

export default pool;
