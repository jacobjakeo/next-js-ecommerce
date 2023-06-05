import React from 'react';
import styles from './order.module.scss';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Thank you for your order!',
  description: 'You will receive your order confirmation per email.',
};

export default function CheckoutPage(): React.JSX.Element {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.thankYouText}>
          <h1>Thank you for your order!</h1>
          <p>You'll receive your order confirmation per email.</p>
        </div>
      </div>
    </main>
  );
}
