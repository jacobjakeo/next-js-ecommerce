import Link from 'next/link';
import styles from './products.module.scss';

export default function BikesPage() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.div1}>
          <img
            src="/bikesoverview.png"
            alt="Nyxus Bikes"
            className={styles.nyxusBikes}
          />
        </div>
        <div className={styles.div2}>
          <Link href="/bikes/zephyr" className={styles.Link}>
            Zephyr
          </Link>
        </div>
        <div className={styles.div3}>
          <Link href="/bikes/notus" className={styles.Link}>
            Notus
          </Link>
        </div>
        <div className={styles.div4}>
          <Link href="/bikes/aura" className={styles.Link}>
            AuraJ
          </Link>
        </div>
        <div className={styles.div5}>
          <Link href="/bikes/notusjunior" className={styles.Link}>
            NotusJ
          </Link>
        </div>
      </div>
    </main>
  );
}
