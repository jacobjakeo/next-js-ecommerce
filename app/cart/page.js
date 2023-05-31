'use client';

import styles from './cart.module.scss';

const handleCheckout = () => {
  // Handle the checkout logic here
  // After handling the logic, redirect to the checkout page
  window.location.href = '/cart/checkout';
};

export default function CartPage() {
  let cartItems = {};

  if (typeof window !== 'undefined') {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
  }

  const clearCart = () => {
    localStorage.removeItem('cartItems');
    window.location.reload();
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(cartItems).forEach((itemId) => {
      const item = cartItems[itemId];
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Cart Summary</h2>
        {Object.keys(cartItems).map((itemId) => (
          <div className={styles.cartItem} key={itemId}>
            <span className={styles.itemName}>
              {cartItems[itemId].productName}
            </span>
            <span className={styles.itemQuantity}>
              {cartItems[itemId].quantity}
            </span>
            <span className={styles.itemPrice}>
              € {cartItems[itemId].price}
            </span>
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
