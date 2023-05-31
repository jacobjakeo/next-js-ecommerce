'use client';

import styles from './cart.module.scss';

const handleCheckout = () => {
  // Handle the checkout logic here
  // After handling the logic, redirect to the checkout page
  window.location.href = '/cart/checkout';
};
export default function CartPage() {
  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Cart</h2>
        <div className={styles.cartItem}>
          <span className={styles.itemName}>Name</span>
          <span className={styles.itemQuantity}>Quantity</span>
          <span className={styles.itemPrice}>Price</span>
        </div>
      </div>
      <div className={styles.cartSummary}>
        <h2>Cart Summary</h2>
        <div className={styles.totalAmount}>
          <span>Total:</span>
          <span data-test-id="cart-total">Total</span>
        </div>
        <button
          className={styles.checkoutButton}
          onClick={handleCheckout}
          data-test-id="cart-checkout"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
