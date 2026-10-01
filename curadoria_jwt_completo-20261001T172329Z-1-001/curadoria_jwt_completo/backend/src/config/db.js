const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || 'aws-0-us-east-2.pooler.supabase.com',
  user: process.env.DB_USER || 'postgres.yrvtmeposbatuidremis',
  password: process.env.DB_PASSWORD || 'mariahfeia2026',
  database: process.env.DB_NAME || 'postgres',
  port: process.env.DB_PORT || 6543,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;