//PG Config setup; controls connection and sessions with database
const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'hadar',
  host: 'localhost',
  port: 5432,
  max: 7,
  idleTimeoutMillis: 30000
}

const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('postgres connected');
});

pool.on('error', (error, client) => {
  console.log('unexpected error on postgres', error);
  process.exit(-1);
});

module.exports = pool;