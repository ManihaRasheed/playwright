import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';

test('Gmail Sign-In', async () => {

    const browser = await chromium.launch({
        headless: true,
        args: [
            '--disable-web-security',
            '--disable-blink-features=AutomationControlled',
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        ]
    });
    // Launch Chromium browser in non-headless mode with slowMo for debugging
    //const browser: Browser = await chromium.launch({ headless: false, slowMo: 250 });
    const page: Page = await browser.newPage();

    // Navigate to Gmail login page
    await page.goto('https://mail.google.com/');

    // Locate the email input field and fill in your email
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('maniharasheed2506@gmail.com');
    await page.locator('#identifierNext').click();

    //await page.pause()

    // Wait for the password input to be visible
    await page.waitForSelector('input[type="password"]:not([aria-hidden="true"])', { state: 'visible', timeout: 60000 });

    // Locate the password input field and fill in your password
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('Maniha2506');
    await page.locator('#passwordNext').click();

    // Wait for Gmail inbox to load by checking the presence of an element in the inbox
    await page.waitForSelector('div[role="main"]', { state: 'visible', timeout: 60000 });

    // Capture and print the page title after sign-in
    const title = await page.title();
    console.log("Signed in successfully", title);

    // Take a screenshot of the inbox
    await page.screenshot({ path: 'inbox.png' });

    // Close the browser
   /* await browser.close();
}, 60000);  // Setting the test timeout to 60 seconds
*/

})