import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/bikes';
import styles from './products.module.scss';

interface Bike {
  id: number;
  productName: string;
  category: string;
  price: string;
  description: string;
}

export const metadata = {
  title: 'Nyxus | Our Bikes',
  description: 'Choose a bike that suits your needs.',
};

const bikes: Bike[] = [
  {
    id: 1,
    productName: 'Zephyr',
    category: 'citybike',
    price: '2550',
    description:
      'Stylish and sleek electric citybike designed for urban adventurers.',
  },
  {
    id: 2,
    productName: 'Notus',
    category: 'offroadbike',
    price: '3980',
    description: 'Offroad ebike designed for adventure and exploration.',
  },
  {
    id: 3,
    productName: 'AuraJunior',
    category: 'kidscitybike',
    price: '1550',
    description: 'Stylish and practical city ebike designed for children.',
  },
  {
    id: 4,
    productName: 'NotusJunior',
    category: 'kidsoffroadbike',
    price: '2100',
    description:
      'Adventure-ready off-road e-bike designed specifically for children.',
  },
];

const BikesPage: React.FC = () => {
  const getBikesData = async () => {
    const bikes = await getBikes();
    return bikes;
  };

  return (
    <main className={styles.BikesPage}>
      <h1>EXPLORE OUR FLEET</h1>
      {bikes.map((bike) => {
        return (
          <div key={`bike-div-${bike.id}`} className={styles.bikesContainer}>
            <div className={styles.productsLinks}>
              <Link href={`/products/${bike.id}`} className={styles.Name}>
                {bike.productName}
              </Link>
            </div>
            <div className={styles.productsImages}>
              <Image
                src={`/images/${bike.productName}.png`}
                alt="Prototype of a Nyxus bicycle"
                width={250}
                height={250}
              />
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default BikesPage;
