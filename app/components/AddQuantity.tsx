'use client';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './AddQuantityButton.module.scss';

interface Bike {
  productName: string;
  price: number;
}

interface AddQuantityButtonProps {
  bike: Bike;
  bikeId: string;
}

const AddQuantityButton: React.FC<AddQuantityButtonProps> = ({
  bike,
  bikeId,
}) => {
  const [count, setCount] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [cookies, setCookie] = useCookies(['cart']);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToTotal = (): void => {
    const cart: { [itemId: string]: any } = cookies.cart || {};
    const { productName, price } = bike;
    const quantity = count;

    if (!cart[bikeId]) {
      cart[bikeId] = {
        productName,
        price,
        quantity,
      };
    } else {
      cart[bikeId].quantity += quantity;
    }

    setCookie('cart', cart);
    setTotal(total + count);

    const updateCartItems = (): void => {
      let totalItems = 0;

      Object.keys(cart).forEach((itemId) => {
        totalItems += cart[itemId].quantity;
      });
      console.log('Total Cart Items:', totalItems);
    };

    updateCartItems();
  };

  return (
    <div className={styles.QuantityButton} data-test-id="product-quantity">
      <button onClick={decrement}>-</button>
      <span className={styles.QuantityAmount}>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={addToTotal} data-test-id="product-add-to-cart">
        Add
      </button>
    </div>
  );
};

export default AddQuantityButton;
