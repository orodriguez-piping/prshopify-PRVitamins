import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pipingrock.com/en-ca');
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('melatonin');
  await page.getByPlaceholder('Search...').press('Enter');
  await expect(page.getByRole('heading', { name: 'Search results for melatonin' })).toBeVisible();
  await expect(page.locator('div:nth-child(2) > .product-card-items-wrapper > span > div > .button-wrapper > .add-to-cart-button')).toBeVisible();
  await page.locator('div:nth-child(2) > .product-card-items-wrapper > span > div > .fs-quantity-selector-wrapper > .fs-quantity-selector-input').click();
  await page.locator('div:nth-child(2) > .product-card-items-wrapper > span > div > .fs-quantity-selector-wrapper > .fs-quantity-selector-input').fill('3');
  await page.locator('div:nth-child(2) > .product-card-items-wrapper > span > div > .button-wrapper > .add-to-cart-button').click();
  await expect(page.getByLabel('product', { exact: true }).getByRole('heading')).toContainText('Melatonin Fast Dissolve, 12 mg, 180 Fast Dissolve Tablets');
  await page.getByRole('link', { name: 'View cart' }).click();
  await expect(page.locator('#template--16278353674478__main').getByRole('button', { name: 'Checkout' })).toBeVisible();
  await expect(page.locator('tbody')).toContainText('Melatonin Fast Dissolve, 12 mg, 180 Fast Dissolve Tablets');
  await page.locator('#template--16278353674478__main').getByRole('button', { name: 'Checkout' }).click();
  await expect(page.getByRole('button', { name: 'Continue to shipping' })).toBeVisible();
});