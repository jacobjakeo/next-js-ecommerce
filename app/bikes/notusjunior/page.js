import styles from './bikelayout.module.scss';

export default function NotusJunior() {
  return (
    <main>
      <div className={styles.parent}>
        <div className={styles.ProductPage} />
        <div className={styles.ProductImage}>BikeImg</div>
        <div className={styles.ProductName}>
          <h1>Notus Junior</h1>
          <span className={styles.PriceTag}>€ 2.100,00</span>
        </div>
        <div className={styles.Description}>
          <ul>
            <li>
              Adventure-ready off-road e-bike designed specifically for
              children.
            </li>
            <li>Compact and lightweight frame tailored for young riders.</li>
            <li>
              Thicker wheels for improved stability and traction on various
              terrains.
            </li>
            <li>
              High-capacity lithium-ion battery for extended riding sessions.
            </li>
            <li>
              Integrated safety features such as GPS tracking, smartphone
              connectivity, and <br /> anti-theft technology for added security
              and peace of mind.
            </li>
          </ul>
        </div>
        <div className={styles.TechnicalSpecs}>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Battery</h3>
            <p>
              High-capacity lithium-ion battery for long-range travel, up to
              90km on a single charge. Fast charging capability for quick and
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
