import styles from './bikelayout.module.scss';

export default function Aura() {
  return (
    <main>
      <div className={styles.parent}>
        <div className={styles.ProductPage} />
        <div className={styles.ProductImage}>BikeImg</div>
        <div className={styles.ProductName}>
          <h1>Aura Junior</h1>
          <span className={styles.PriceTag}>€ 1.550,00</span>
        </div>
        <div className={styles.Description}>
          <ul>
            <li>Stylish and practical city e-bike designed for children.</li>
            <li>
              Compact frame size and lightweight construction for easy
              maneuverability.
            </li>
            <li>Smooth-rolling tires suitable for urban environments.</li>
            <li>Efficient electric motor for effortless city commuting.</li>
            <li>
              Features such as integrated lights, fenders, and a rear rack for
              convenience <br /> and safety.
            </li>
          </ul>
        </div>
        <div className={styles.TechnicalSpecs}>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Battery</h3>
            <p>
              High-capacity lithium-ion battery for long-range travel, up to
              70km on a single charge. Fast charging capability for quick and
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
