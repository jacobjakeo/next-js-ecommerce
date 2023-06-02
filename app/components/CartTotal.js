'use client';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './CartTotal.module.scss';

const CartTotal = () => {
  const [cookies] = useCookies(['cart']);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cart = cookies.cart || {};
    let total = 0;
    Object.keys(cart).forEach((itemId) => {
      total += cart[itemId].quantity;
    });
    setCartTotal(total);
  }, [cookies.cart]);

  return <p className={styles.CartTotal}>({cartTotal})</p>;
};

export default CartTotal;
