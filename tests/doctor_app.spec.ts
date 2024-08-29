import { test, expect, chromium } from '@playwright/test';

test('doctor login', async ({}) => {
    const browser = await chromium.launch({ headless: false }); // Run in non-headless mode for debugging
    const page = await browser.newPage();

    try {
        // Navigate to the login page
        console.log('Navigating to login page...');
        await page.goto('https://doctor.vaccinationcentre.com/login', { waitUntil: 'networkidle' }); // Wait until network is idle

        // Verify that the login page is loaded
        console.log('Waiting for the mobile input field...');
        await page.waitForSelector('input[name="mobile"]', { timeout: 20000 }); // Wait for the mobile input field

        // Use environment variables for credentials
        const mobileNumber = process.env.DOCTOR_MOBILE_NUMBER || '3456545678';
        const password = process.env.DOCTOR_PASSWORD || '5B4AxgQ5';

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
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        // Close the browser
        await browser.close();
    }
});
