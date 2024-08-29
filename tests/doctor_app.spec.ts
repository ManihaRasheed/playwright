import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('doctor login', async ({}) => {

    const browser: Browser = await chromium.launch({ headless: true });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto('https://doctor.vaccinationcentre.com/login');

    // Fill in the mobile number
  await page.fill('input[name="mobile"]', '3456545678');
  
  // Fill in the password
  await page.fill('input[name="password"]', '5B4AxgQ5');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    await page.waitForNavigation();

    // verify if the login was successful
   
    await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/dashboard');
    // or
    // await expect(page.locator('text=Logout')).toBeVisible();

    // Close the browser
    await browser.close();
});

