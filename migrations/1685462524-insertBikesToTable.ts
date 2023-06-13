import { Sql } from 'postgres';

export const bikes = [
  {
    productName: 'Zephyr',
    category: 'citybike',
    price: 2550,
    description:
      'Stylish and sleek electric citybike designed for urban adventurers.',
  },
  {
    productName: 'Notus',
    category: 'offroadbike',
    price: 3980,
    description: 'Offroad ebike designed for adventure and exploration.',
  },
  {
    productName: 'AuraJunior',
    category: 'kidscitybike',
    price: 1550,
    description: 'Stylish and practical city ebike designed for children.',
  },
  {
    productName: 'NotusJunior',
    category: 'kidsoffroadbike',
    price: 2100,
    description:
      'Adventure-ready off-road e-bike designed specifically for children.',
  },
];

export type Bike = {
  id: number;
  productName: string;
  category: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  for (const bike of bikes) {
    await sql`
      INSERT INTO bikes
        (product_name, category, price, description)
      VALUES
        (${bike.productName}, ${bike.category}, ${bike.price}, ${bike.description})
    `;
  }
}

export async function down(sql: Sql) {
  for (const bike of bikes) {
    await sql`
      DELETE FROM bikes
      WHERE
        product_name = ${bike.productName}
    `;
  }
}
