import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : undefined,
  password: process.env.DB_PASSWORD,
});

export default pool