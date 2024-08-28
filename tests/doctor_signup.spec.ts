import { test, expect, Browser, Page, chromium } from '@playwright/test';

test('doctor signup and login', async ({}) => {

    const browser: Browser = await chromium.launch({ headless: true });
    const page: Page = await browser.newPage();

await page.goto("https://doctor.vaccinationcentre.com/login")

  await page.getByRole('link', { name: 'Signup' }).click();
  await page.getByLabel('Qualification').click();
  await page.getByLabel('Qualification').fill('mbbs');
  await page.getByLabel('Design Your Letterpad').click();
  await page.getByLabel('Design Your Letterpad').fill('dfefesd');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('dr');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('ahmad');
  await page.getByLabel('Display Name').click();
  await page.getByLabel('Display Name').fill('dr ahmad');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('douwuleissapa-8958@yopmail.com');
  await page.getByLabel('Mobile Number With WhatsApp').click();
  await page.getByLabel('Mobile Number With WhatsApp').fill('3567489447');
  await page.getByLabel('Appointment Number').click();
  await page.getByLabel('Appointment Number').fill('34657688');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.locator('a').filter({ hasText: 'Forget Password' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('douwuleissapa-8958@yopmail.com');
  await page.getByRole('button', { name: 'log in   Send Password' }).click();
  await page.locator('input[name="ion-input-0"]').click();
  await page.locator('input[name="ion-input-0"]').fill('3567489447');
  await page.locator('input[name="ion-input-1"]').click();
  await page.locator('input[name="ion-input-1"]').fill('L6DJtS');
  await page.getByRole('button', { name: 'log in   Login' }).click();
});
    
    
    
