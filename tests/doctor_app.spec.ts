
import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('doctor login', async ({}) => {

    const browser: Browser = await chromium.launch({ headless: true });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto('https://doctor.vaccinationcentre.com/login');

    // Use environment variables for credentials
    const mobileNumber = process.env.DOCTOR_MOBILE_NUMBER || '';
    const password = process.env.DOCTOR_PASSWORD || '';

    // Fill in the mobile number
    await page.fill('input[name="mobile"]', mobileNumber);
  
    // Fill in the password
    await page.fill('input[name="password"]', password);

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    await page.waitForNavigation();

    // Verify if the login was successful
    await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/dashboard');
    
    // Close the browser
    await browser.close();
});


