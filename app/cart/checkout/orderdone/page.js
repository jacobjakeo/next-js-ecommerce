import styles from './order.module.scss';

export const metadata = {
  title: 'Thank you for your order!',
  description: 'You will receive your order confirmation per email.',
};

export default function CheckoutPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.thankYouPage}></div>
        <div className={styles.thankYouText}>
          <h1>Thank you for your order!</h1>
          <p>You'll receive your order confirmation per email.</p>
        </div>
      </div>
    </main>
  );
}
