import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('doctor signup and login', async () => {

    // Launch browser
    const browser: Browser = await chromium.launch({ headless: true });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto("https://doctor.vaccinationcentre.com/login");

    // Perform signup
    await page.getByRole('link', { name: 'Signup' }).click();
    await page.getByLabel('Qualification').fill('mbbs');
    await page.getByLabel('Design Your Letterpad').fill('dfefesd');
    await page.getByLabel('First Name').fill('dr');
    await page.getByLabel('Last Name').fill('ahmad');
    await page.getByLabel('Display Name').fill('dr ahmad');
    await page.getByLabel('Email').fill(process.env.SIGNUP_EMAIL || '');
    await page.getByLabel('Mobile Number With WhatsApp').fill(process.env.SIGNUP_PHONE || '');
    await page.getByLabel('Appointment Number').fill('34657688');
    await page.getByRole('button', { name: 'Sign Up' }).click();

    // Perform password reset
    await page.locator('a').filter({ hasText: 'Forget Password' }).click();
    await page.getByRole('textbox').fill(process.env.SIGNUP_EMAIL || '');
    await page.getByRole('button', { name: 'log in   Send Password' }).click();
    await page.locator('input[name="ion-input-0"]').fill(process.env.SIGNUP_PHONE || '');
    await page.locator('input[name="ion-input-1"]').fill(process.env.PASSWORD || '');
    await page.getByRole('button', { name: 'log in   Login' }).click();

    // Close the browser
    await browser.close();
});
