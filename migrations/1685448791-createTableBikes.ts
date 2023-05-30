import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE bikes (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      product_name varchar(50) NOT NULL,
      category varchar(50) NOT NULL,
      price varchar(20) NOT NULL,
      description varchar NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE bikes
  `;
}
