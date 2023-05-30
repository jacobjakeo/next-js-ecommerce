'use client';

import React, { useState } from 'react';
import styles from './AddQuantityButton.module.scss';

const AddQuantityButton = () => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addToTotal = () => {
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
