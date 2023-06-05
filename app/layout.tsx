import './globals.css';
import Navbar from '/Users/jakuboksa/projects/next-js-ecommerce/app/components/Navbar';
import { Inter } from 'next/font/google';
import React from 'react';

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
