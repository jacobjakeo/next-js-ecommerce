import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Nyxus | Future of Mobility',
  description: 'Enter a new era of biking.',
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
