import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('doctor login', async ({}) => {

    const browser: Browser = await chromium.launch({ headless: true });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto('https://doctor.vaccinationcentre.com/login');

    // Enter the mobile number
    await page.fill('input[name="MobileNumber"]', 'your-mobile-number');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    await page.waitForNavigation();

    // Optionally, you can verify if the login was successful
    // For example, check if a specific element exists after login
    await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/dashboard');
    // or
    // await expect(page.locator('text=Logout')).toBeVisible();

    // Close the browser
    await browser.close();
});
