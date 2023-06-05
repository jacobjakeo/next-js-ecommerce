'use client';
import React from 'react';
import { useCookies } from 'react-cookie';
import styles from './CartFunction.module.scss';

const handleCheckout = (): void => {
  window.location.href = '/cart/checkout';
};

export default function CartPage(): React.JSX.Element {
  const [cookies, setCookie] = useCookies(['cart']);
  const cart: { [itemId: string]: any } = cookies.cart || {};

  const clearCart = (): void => {
    setCookie('cart', {}); // Clear the cart by setting it to an empty object
    window.location.reload();
  };

  const removeItem = (itemId: string): void => {
    const updatedCart = { ...cart };
    delete updatedCart[itemId];
    setCookie('cart', updatedCart);
  };

  const calculateTotal = (): number => {
    let total = 0;
    Object.keys(cart).forEach((itemId) => {
      const item = cart[itemId];
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Cart Summary</h2>
        {Object.keys(cart).map((itemId) => (
          <div className={styles.cartItem} key={itemId}>
            <span className={styles.itemName}>{cart[itemId].productName}</span>
            <span className={styles.itemQuantity}>{cart[itemId].quantity}</span>
            <span className={styles.itemPrice}>€ {cart[itemId].price}</span>
            <button
              data-test-id={`cart-product-remove-${itemId}`}
              className={styles.removeItemButton}
              onClick={() => removeItem(itemId)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h2>Total Cost</h2>
        <div className={styles.totalAmount}>
          <span>Total:</span>
          <span data-test-id="cart-total" className={styles.totalPrice}>
            € {calculateTotal()}
          </span>
        </div>
        <button
          className={styles.checkoutButton}
          onClick={handleCheckout}
          data-test-id="cart-checkout"
        >
          Proceed to Checkout
        </button>
        <button onClick={clearCart} className={styles.clearCartButton}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
