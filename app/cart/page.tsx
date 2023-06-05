import React from 'react';
import CartPage from '../components/CartFunction';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Nyxus | Your Cart',
  description: 'Please check if your cart summary is correct.',
};

export default function CartSummary(): React.JSX.Element {
  return (
    <div>
      <CartPage />
    </div>
  );
}
