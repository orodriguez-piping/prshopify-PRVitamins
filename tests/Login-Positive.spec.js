import { test, expect } from '@playwright/test';

//Login with valid credentials 
test('Valid Credentials', async ({ page }) => {
    await page.goto('https://prvitamins.com');
    await page.getByRole('button', { name: 'Account' }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('chattermaxtest@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('E');
    await page.getByLabel('Password').press('CapsLock');
    await page.getByLabel('Password').fill('Evegigi90');
    await page.getByRole('button', { name: 'Login' }).click();
  });
  //Login with a username with special characters 
  //Reset password and Login after