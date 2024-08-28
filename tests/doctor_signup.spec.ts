import { test, expect } from '@playwright/test';

test('Doctor login test', async ({ page }) => {
    // Navigate to the login page
    await page.goto("https://doctor.vaccinationcentre.com/login");

    // Fill in the login credentials
    await page.getByLabel('Mobile Number').fill(process.env.SIGNUP_PHONE || '');
    await page.getByLabel('Password').fill(process.env.PASSWORD || '');

    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login (this will depend on the app's behavior post-login)
    // Example: Check if a logout button or a dashboard element appears
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

    // Perform any additional checks
});
