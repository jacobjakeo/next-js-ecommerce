import styles from './bikelayout.module.scss';

export default function Zephyr() {
  return (
    <main>
      <div className={styles.parent}>
        <div className={styles.ProductPage} />
        <img
          src="/zephyrproduct.png"
          alt="Zephyr X"
          className={styles.ProductImage}
        />
        <div className={styles.ProductName}>
          <h1>Zephyr X</h1>
          <span className={styles.PriceTag}>€ 2.550,00</span>
        </div>
        <div className={styles.Description}>
          <ul>
            <li>
              Stylish and sleek electric citybike designed for urban
              adventurers.
            </li>
            <li>
              Electric motor provides swift acceleration and effortless
              cruising, up to 40km/h.
            </li>
            <li>
              Lightweight and durable construction for agile maneuverability in
              city traffic.
            </li>
            <li>
              Long-lasting battery life for extended rides without the need for
              frequent charging.
            </li>
            <li>
              Embrace the future of commuting with Zephyr X and experience a
              thrilling and eco-friendly way to navigate the city streets.
            </li>
          </ul>
        </div>
        <div className={styles.TechnicalSpecs}>
          <div className={styles.TechnicalSpecsDesc}>
            <h3>Battery</h3>
            <p>
              High-capacity lithium-ion battery for long-range travel, up to
              80km on a single charge. Fast charging capability for quick and
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
