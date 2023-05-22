import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './navbar.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NYXUS',
  description:
    'Unleash the power of adventure with our modern and captivating e-bikes. Explore the world with speed, style, and a touch of mystery. Ride the winds with Nyxus and experience the thrill of boundless possibilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.Navbar}>
          <Link href={'/bikes'}>Bikes</Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
