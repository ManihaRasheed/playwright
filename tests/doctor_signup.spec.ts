import { test, expect } from '@playwright/test';

test('Doctor login test', async ({ page }) => {
    // Navigate to the login page
    await page.goto("https://doctor.vaccinationcentre.com/login");

    // Fill in the login credentials
    console.log("SIGNUP_PHONE:", process.env.SIGNUP_PHONE);


   // Use getByPlaceholder if the input field has a placeholder attribute
await page.getByPlaceholder('Enter your mobile number').fill(process.env.SIGNUP_PHONE || '');

// Or use a CSS selector directly
await page.locator('input[name="mobile"]').fill(process.env.SIGNUP_PHONE || '');

console.log("PASSWORD:", process.env.PASSWORD);
await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD || '');

// Or use a CSS selector directly
await page.locator('input[name="mobile"]').fill(process.env.PASSWORD || '');

    // Click the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login (this will depend on the app's behavior post-login)
    // Example: Check if a logout button or a dashboard element appears
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

    // Perform any additional checks
});
