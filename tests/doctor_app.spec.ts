import { test, expect, chromium } from '@playwright/test';

test('doctor login', async ({}) => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to the login page
    console.log('Navigating to login page...');
    await page.goto('https://doctor.vaccinationcentre.com/login');

    // Use environment variables for credentials
    const mobileNumber = process.env.DOCTOR_MOBILE_NUMBER || '';
    const password = process.env.DOCTOR_PASSWORD || '';

    // Fill in the mobile number and password
    console.log('Filling login credentials...');
    await page.fill('input[name="mobile"]', mobileNumber);
    await page.fill('input[name="password"]', password);

    // Click the login button
    console.log('Clicking login button...');
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    console.log('Waiting for navigation...');
    await page.waitForNavigation({ timeout: 60000 });

    // Verify if the login was successful
    console.log('Verifying login...');
    await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/dashboard');

    // Close the browser
    await browser.close();
});
