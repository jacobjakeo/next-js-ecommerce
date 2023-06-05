import CheckoutPage from '/Users/jakuboksa/projects/next-js-ecommerce/app/components/CheckoutPage';
import React from 'react';

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
