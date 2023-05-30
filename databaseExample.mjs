import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

console.log(
  await sql`
    SELECT * FROM bikes;
  `,
);

// For Testing
await sql.end();
