import { expect, test } from '@playwright/test';

test('checkout test', async ({ page }) => {
  await page.goto('http://localhost:3000/cart/checkout');

  await page.getByTestId('checkout-first-name').fill('Jakub');
  await page.getByTestId('checkout-last-name').fill('Oksa');
  await page.getByTestId('checkout-email').fill('jakuboksa@gmail.com');
  await page.getByTestId('checkout-address').fill('Example Street');
  await page.getByTestId('checkout-city').fill('Vienna');
  await page.getByTestId('checkout-postal-code').fill('1010');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByTestId('checkout-credit-card').fill('123 456 789 000');
  await page.getByTestId('checkout-expiration-date').fill('01/23');
  await page.getByTestId('checkout-security-code').fill('123');

  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();

  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/orderdone');
});
