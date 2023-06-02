'use client';
import Link from 'next/link';
import React from 'react';
import CartTotal from './CartTotal';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link
        href="/products"
        className={styles.Bikes}
        data-test-id="products-link"
      >
        Bikes
      </Link>
      <Link href="/" className={styles.Logo}>
        NYXUS
      </Link>
      <Link href="/cart" className={styles.Cart} data-test-id="cart-link">
        Cart
        <CartTotal className={styles.CartTotal} data-test-id="cart-count" />
      </Link>
    </nav>
  );
};

export default Navbar;
