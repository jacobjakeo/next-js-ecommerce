'use client';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './CartTotal.module.scss';

const CartTotal: React.FC = () => {
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cookies] = useCookies(['cart']);

  useEffect(() => {
    const cart = cookies.cart || {};
    let total = 0;
    Object.keys(cart).forEach((itemId) => {
      total += cart[itemId].quantity;
    });
    setCartTotal(total);
  }, [cookies]);

  return <p className={styles.CartTotal}>{cartTotal}</p>;
};

export default CartTotal;
