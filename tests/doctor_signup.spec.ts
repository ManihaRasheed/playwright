import { test, expect } from '@playwright/test';

test('Doctor Login Test', async ({ page }) => {
  // Get mobile number and password from environment variables
  const mobileNumber = process.env.MOBILE_NUMBER;
  const password = process.env.PASSWORD;

  if (!mobileNumber || !password) {
    throw new Error('MOBILE_NUMBER and PASSWORD environment variables must be set');
  }

  // Navigate to the login page
  await page.goto('https://doctor.vaccinationcentre.com/login');

  // Enter the mobile number
  await page.fill('input[name="mobile"]', mobileNumber);

  // Enter the password
  await page.fill('input[name="password"]', password);

  // Click the login button
  await page.click('button[type="submit"]');

  // Add assertion to verify successful login
  await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/dashboard');
});
