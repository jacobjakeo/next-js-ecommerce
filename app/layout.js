import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import AddQuantityButton from './components/AddQuantity';
import styles from './navbar.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
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
            </Link>
          </nav>
          {children}
        </header>
      </body>
    </html>
  );
}
