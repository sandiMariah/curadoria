const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || 'aws-0-us-east-1.pooler.supabase.com',
  user: process.env.DB_USER || 'postgres.yaqsmoomifgkakmvbxqw',
  password: process.env.DB_PASSWORD || 'isafedida26',
  database: process.env.DB_NAME || 'postgres',
  port: process.env.DB_PORT || 6543,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;