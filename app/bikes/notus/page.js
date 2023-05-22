import styles from './bikelayout.module.scss';

export default function Notus() {
  return (
    <main>
      <div className={styles.parent}>
        <div className={styles.ProductPage} />
        <div className={styles.ProductImage}>BikeImg</div>
        <div className={styles.ProductName}>
          <h1>Notus</h1>
          <span className={styles.PriceTag}>€ 3.980,00</span>
        </div>
        <div className={styles.Description}>
          <ul>
            <li>Off-road ebike designed for adventure and exploration.</li>
            <li>
              Thicker wheels for stability and traction on rugged terrains.
            </li>
            <li>
              Powerful electric motor provides efficient and effortless riding
              experience.
            </li>
            <li>
              Durable construction with a robust frame for long-lasting
              performance.
            </li>
            <li>
              Equipped with advanced suspension system for a smooth and
              comfortable <br /> off-road journey.
            </li>
          </ul>
        </div>
        <div className={styles.TechnicalSpecs}>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Battery</h3>
            <p>
              High-capacity lithium-ion battery for long-range travel, up to
              100km on a single charge. Fast charging capability for quick and
              convenient recharging. Intelligent battery management for optimal
              performance.
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
