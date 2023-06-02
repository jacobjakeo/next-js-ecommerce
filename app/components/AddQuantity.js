'use client';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './AddQuantityButton.module.scss';

const AddQuantityButton = ({ bike, bikeId }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const [cookies, setCookie] = useCookies(['cart']);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToTotal = () => {
    const cart = cookies.cart || {};
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

    // Logic to update the cart items count
    const updateCartItems = () => {
      let totalItems = 0;

      Object.keys(cart).forEach((itemId) => {
        totalItems += cart[itemId].quantity;
      });

      // Update the cart items count in the Navbar or wherever needed
      // You can use your preferred method to update the count, e.g., updating a state variable or dispatching an action
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
