import React from 'react';
import CheckoutPage from '../../components/CheckoutPage';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Nyxus | Checkout',
  description: 'Please provide your personal and shipping information.',
};

export default function CheckoutSummary(): React.JSX.Element {
  return <CheckoutPage />;
}
