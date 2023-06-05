'use client';

import { useState } from 'react';
import styles from './CheckoutPage.module.scss';

const handleFormSubmit = (event) => {
  event.preventDefault();
  // Perform form submission logic here
  // After successful submission, navigate to the "orderdone" page
  window.location.href = '/cart/checkout/orderdone';
};

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postal, setPostal] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const clearCartCookies = () => {
    document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.shippingForm} onSubmit={handleFormSubmit}>
        <h2>Please Enter Your Shipping & Payment Information</h2>
        <div className={styles.formColumns}>
          <div className={styles.formColumn}>
            <div className={styles.formField}>
              <label className={styles.formText}>
                First Name
                <input
                  data-test-id="checkout-first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Last Name
                <input
                  data-test-id="checkout-last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Email
                <input
                  data-test-id="checkout-email"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Address
                <input
                  data-test-id="checkout-adress"
                  value={address}
                  onChange={(event) => setAddress(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                ZIP Code
                <input
                  data-test-id="checkout-postal-code"
                  value={postal}
                  onChange={(event) => setPostal(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                City
                <input
                  data-test-id="checkout-city"
                  value={city}
                  onChange={(event) => setCity(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Country
                <input
                  data-test-id="checkout-country"
                  value={country}
                  onChange={(event) => setCountry(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Credit Card Number
                <input
                  data-test-id="checkout-credit-card"
                  value={creditCard}
                  onChange={(event) => setCreditCard(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Expiration Date
                <input
                  data-test-id="checkout-expiration-date"
                  value={expiration}
                  onChange={(event) => setExpiration(event.currentTarget.value)}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Security Code
                <input
                  data-test-id="checkout-security-code"
                  value={securityCode}
                  onChange={(event) =>
                    setSecurityCode(event.currentTarget.value)
                  }
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <button
              className={styles.checkoutButton}
              data-test-id="checkout-confirm-order"
              onClick={clearCartCookies}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
