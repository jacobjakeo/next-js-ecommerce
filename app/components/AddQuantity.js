'use client';

import React, { useState } from 'react';
import styles from './AddQuantityButton.module.scss';

const AddQuantityButton = ({ bike, bikeId }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToTotal = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
    const { productName, price } = bike;
    const quantity = count;

    if (!cartItems[bikeId]) {
      cartItems[bikeId] = {
        productName,
        price,
        quantity,
      };
    } else {
      cartItems[bikeId].quantity += quantity;
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setTotal(total + count);
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
