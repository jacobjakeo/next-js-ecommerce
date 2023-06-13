'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './CheckoutPage.module.scss';

const handleFormSubmit = (event: FormEvent) => {
  event.preventDefault();
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

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.currentTarget.value);
  };

  const handlePostalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostal(event.currentTarget.value);
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  };

  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.currentTarget.value);
  };

  const handleCreditCardChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCreditCard(event.currentTarget.value);
  };

  const handleExpirationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpiration(event.currentTarget.value);
  };

  const handleSecurityCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecurityCode(event.currentTarget.value);
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.shippingForm} onSubmit={handleFormSubmit}>
        <h2>Please Enter Your Shipping & Payment Information</h2>
        <div className={styles.formColumns}>
          <div className={styles.formColumn}>
            <div className={styles.formField}>
              <label className={styles.formText}>
                First Name*
                <input
                  data-test-id="checkout-first-name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Last Name*
                <input
                  data-test-id="checkout-last-name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Email*
                <input
                  data-test-id="checkout-email"
                  value={email}
                  onChange={handleEmailChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Address*
                <input
                  data-test-id="checkout-address"
                  value={address}
                  onChange={handleAddressChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                ZIP Code*
                <input
                  data-test-id="checkout-postal-code"
                  value={postal}
                  onChange={handlePostalChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                City*
                <input
                  data-test-id="checkout-city"
                  value={city}
                  onChange={handleCityChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Country*
                <input
                  data-test-id="checkout-country"
                  value={country}
                  onChange={handleCountryChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Credit Card Number*
                <input
                  data-test-id="checkout-credit-card"
                  value={creditCard}
                  onChange={handleCreditCardChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Expiration Date*
                <input
                  data-test-id="checkout-expiration-date"
                  value={expiration}
                  onChange={handleExpirationChange}
                  className={styles.inputField}
                  required
                />
              </label>
            </div>
            <div className={styles.formField}>
              <label className={styles.formText}>
                Security Code*
                <input
                  data-test-id="checkout-security-code"
                  value={securityCode}
                  onChange={handleSecurityCodeChange}
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
