import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('doctor forgot password', async ({}) => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto('https://doctor.vaccinationcentre.com/login');

    // Click on the "Forgot Password" link
    await page.click('text=Forgot Password');

    // Wait for the forgot password page to load
    await page.waitForNavigation();

    // Enter the mobile number for password recovery
    await page.fill('input[name="MobileNumber"]', 'your-mobile-number');

    // Submit the forgot password form
    await page.click('button[type="submit"]');

    // Wait for any confirmation message or navigation
    await page.waitForNavigation();

    // Optionally, you can verify if the password recovery was successful
    // For example, check if a confirmation message appears
    await expect(page.locator('text=Password reset link sent')).toBeVisible();
    // or
    // Check if redirected to a specific page
    // await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/password-reset-confirmation');

    // Close the browser
    await browser.close();
});
