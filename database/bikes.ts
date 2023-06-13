import { cache } from 'react';
import { sql } from './connect';

// export const bikes = [
//  {
//    id: 1,
//   productName: 'Zephyr',
//    category: 'citybike',
//    price: '2550',
//    description:
//      'Stylish and sleek electric citybike designed for urban adventurers.',
//  },
//  {
//    id: 2,
//    productName: 'Notus',
//    category: 'offroadbike',
//    price: '3980',
//    description: 'Offroad ebike designed for adventure and exploration.',
//  },
//  {
//    id: 3,
//    productName: 'AuraJunior',
//    category: 'kidscitybike',
//   price: '1550',
//   description: 'Stylish and practical city ebike designed for children.',
//  },
//  {
//    id: 4,
//    productName: 'NotusJunior',
//    category: 'kidsoffroadbike',
//    price: '2100',
//    description:
//      'Adventure-ready off-road e-bike designed specifically for children.',
//  },
// ];

// export function getBikeById(id: number) {
//  return bikes.find((bike) => bike.id === id);
// }

// type Bike = {
// id: number;
//  productName: string;
//  category: string;
//  price: number;
//  description: string;
// };

export const getBikes = cache(async () => {
  const bikes = await sql<
    {
      id: number;
      productName: string;
      category: string;
      price: string;
      description: string;
    }[]
  >`
  SELECT * FROM bikes;`;
  return bikes;
});

export const getBikeById = cache(async (id: number) => {
  const [bike] = await sql<
    {
      id: number;
      productName: string;
      category: string;
      price: string;
      description: string;
    }[]
  >`
    SELECT * FROM bikes WHERE id = ${id};
  `;
  return bike;
});
