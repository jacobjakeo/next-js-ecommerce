import Image from 'next/image';
import AddQuantityButton from '../../components/AddQuantity';
import { getBikeById } from '../../database/bikes';
import styles from './bikelayout.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Nyxus | Bike',
  description: 'Choose a bike that suits your needs.',
};

export default async function BikePage({ params }) {
  const singleBike = await getBikeById(Number(params.bikeId));

  return (
    <main>
      <div className={styles.parent}>
        <div className={styles.ProductPage} />
        <Image
          src={`/images/${singleBike.productName}.png`}
          alt="Prototype of a Nyxus bicycle"
          className={styles.ProductImage}
          data-test-id="product-image"
          width={550}
          height={550}
        />
        <div className={styles.ProductName}>
          <h1>{singleBike.productName}</h1>
          <span className={styles.PriceTag} data-test-id="product-price">
            € {singleBike.price},00
          </span>
          <AddQuantityButton bike={singleBike} bikeId={params.bikeId} />
        </div>
        <div className={styles.Description}>
          <ul>
            <li>{singleBike.description}</li>
            <li>
              Electric motor provides swift acceleration and effortless
              cruising.
            </li>
            <li>
              Lightweight and durable construction for agile maneuverability.
            </li>
            <li>
              Long-lasting battery life for extended rides without the need for
              frequent charging.
            </li>
            <li>
              Embrace the future of commuting with Nyxus and experience a
              thrilling and eco-friendly way to navigate.
            </li>
          </ul>
        </div>
        <div className={styles.TechnicalSpecs}>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Battery</h3>
            <p>
              High-capacity lithium-ion battery for long-range travel. Fast
              charging capability for quick and convenient recharging.
              Intelligent battery management for optimal performance.
            </p>
          </div>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Security</h3>
            <p>
              Integrated GPS tracking system for real-time location monitoring
              Smartphone connectivity for easy navigation and route planning.
              Anti-theft feature with geofencing technology to ensure bike
              security.
            </p>
          </div>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Connectivity</h3>
            <p>
              Bluetooth-enabled for seamless integration with mobile devices
              Dedicated mobile app for personalized settings and ride
              statistics. Wireless connectivity for firmware updates and
              enhanced functionality.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
