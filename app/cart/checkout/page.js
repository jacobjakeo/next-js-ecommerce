'use client';

import { useState } from 'react';
import styles from './checkout.module.scss';

const handleFormSubmit = (event) => {
  event.preventDefault();
  // Perform form submission logic here
  // After successful submission, navigate to the "orderdone" page
  window.location.href = '/cart/orderdone';
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

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h2>Please Enter Your Shipping & Payment Information</h2>
      <div className={styles.nameInput}>
        <label>
          First Name
          <input
            data-test-id="checkout-first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            required
          />
        </label>
        <label>
          Last Name
          <input
            data-test-id="checkout-last-name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            data-test-id="checkout-email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
        </label>
      </div>
      <div className={styles.City}>
        <label>
          Address
          <input
            data-test-id="checkout-adress"
            value={address}
            onChange={(event) => setAddress(event.currentTarget.value)}
            required
          />
        </label>
        <label>
          ZIP Code
          <input
            data-test-id="checkout-postal-code"
            value={postal}
            onChange={(event) => setPostal(event.currentTarget.value)}
            required
          />
        </label>
        <label>
          City
          <input
            data-test-id="checkout-city"
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
            required
          />
        </label>
        <label>
          Country
          <input
            data-test-id="checkout-country"
            value={country}
            onChange={(event) => setCountry(event.currentTarget.value)}
            required
          />
        </label>
      </div>
      <div className={styles.creditCard}>
        <label>
          Credit Card Number
          <input
            data-test-id="checkout-credit-card"
            value={creditCard}
            onChange={(event) => setCreditCard(event.currentTarget.value)}
            required
          />
        </label>
        <div>
          <label>
            Expiration Date
            <input
              data-test-id="checkout-expiration-date"
              value={expiration}
              onChange={(event) => setExpiration(event.currentTarget.value)}
              required
            />
          </label>
          <label>
            Security Code
            <input
              data-test-id="checkout-security-code"
              value={securityCode}
              onChange={(event) => setSecurityCode(event.currentTarget.value)}
              required
            />
          </label>
          <button
            className={styles.checkoutButton}
            data-test-id="checkout-confirm-order"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </form>
  );
}
