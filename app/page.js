import styles from './homepage.module.scss';

export default function HomePage() {
  return (
    <main className={styles.Body}>
      <img
        src="/images/NyxusBackground.jpg"
        alt="Nyxus Biker"
        className={styles.LandingImage}
      />
      <h1 className={styles.Heading1}>
        <span>EMBRACE THE</span>
        <div className={styles.message}>
          <div className={styles.word1}>SPEED</div>
          <div className={styles.word2}>SAFETY</div>
          <div className={styles.word3}>DESIGN</div>
        </div>
      </h1>
    </main>
  );
}
