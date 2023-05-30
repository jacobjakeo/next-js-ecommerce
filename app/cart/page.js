import styles from './cart.module.scss';

export const metadata = {
  title: 'Nyxus | Cart',
  description: 'Your Cart',
};
export default function CartPage() {
  return (
    <main className={styles.CartPage}>
      <div className={styles.CartContainer}></div>
    </main>
  );
}
