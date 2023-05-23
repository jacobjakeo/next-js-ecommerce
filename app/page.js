import styles from './homepage.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.LandingPage}>
        <img
          src="/nyxusbackground.png"
          alt="nyxus landing"
          className={styles.NyxusBackground}
        />
      </div>
    </main>
  );
}
