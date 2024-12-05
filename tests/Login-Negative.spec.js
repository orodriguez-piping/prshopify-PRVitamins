import { test, expect } from '@playwright/test';

// Login Empty Password
test('Empty Password', async ({ page }) => {
  await page.goto('https://prvitamins.com');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('chattermaxtest@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#customer_login div').filter({ hasText: 'Password Recover password' }).locator('div').click();
});

//Login Empty Username
test('Empty Username', async ({ page }) => {
  await page.goto('https://prvitamins.com');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('E');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Evegigi90');
  await page.getByRole('button', { name: 'Login' }).click();
});
//Login Incorrect Password
test('Incorrect Password', async ({ page }) => {
  await page.goto('https://prvitamins.com');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('chattermaxtest@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ajksdfkasdfkl');
  await page.getByRole('button', { name: 'Login' }).click();
});
//Login Incorrect Username 
test('Incorrect Username', async ({ page }) => {
  await page.goto('https://prvitamins.com');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('adsfasd');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('E');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Evegigi90');
  await page.getByRole('button', { name: 'Login' }).click();
});
//Login Special characters in Username
test('Special Characters', async ({ page }) => {
  await page.goto('https://prvitamins.com');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('dsdfsdff@#$@#$@#$@#$@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('E');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Evegigi90');
  await page.getByRole('button', { name: 'Login' }).click();
});


