'use client';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './CartFunction.module.scss';

const handleCheckout = (): void => {
  window.location.href = '/cart/checkout';
};

export default function CartPage(): React.JSX.Element {
  const [cookies, setCookie] = useCookies(['cart']);
  const [cart, setCart] = useState(cookies.cart || {});

  const clearCart = (): void => {
    setCookie('cart', {});
    setCart({});
  };

  const removeItem = (itemId: string): void => {
    const updatedCart = { ...cart };
    delete updatedCart[itemId];
    setCookie('cart', updatedCart);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId: string, quantity: number): void => {
    const updatedCart = { ...cart };
    updatedCart[itemId].quantity = quantity;
    setCookie('cart', updatedCart);
    setCart(updatedCart);
  };

  const calculateTotal = (): number => {
    let total = 0;
    Object.keys(cart).forEach((itemId) => {
      const item = cart[itemId];
      total += item.price * item.quantity;
    });
    return total;
  };

  const cartItems = Object.keys(cart).map((itemId) => (
    <div className={styles.cartItem} key={`cart-item-${itemId}`}>
      <span className={styles.itemName}>{cart[itemId].productName}</span>
      <input
        type="number"
        className={styles.itemQuantity}
        value={cart[itemId].quantity}
        onChange={(e) => updateQuantity(itemId, parseInt(e.target.value))}
        min={1}
      />
      <span className={styles.itemPrice}>€ {cart[itemId].price}</span>
      <button
        data-test-id={`cart-product-remove-${itemId}`}
        className={styles.removeItemButton}
        onClick={() => removeItem(itemId)}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Cart Summary</h2>
        {cartItems.length > 0 ? cartItems : <p>Your cart is empty.</p>}
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
