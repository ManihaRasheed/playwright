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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*// Navigate to the initial signup page
    await page.goto('https://doctor.vaccinationcentre.com/signup');

    // Fill in the initial signup form
    await page.fill('input[name="InitialFullName"]', 'John Doe');  // Replace with actual field name
    await page.fill('input[name="InitialEmail"]', 'john.doe@example.com');  // Replace with actual field name
    await page.fill('input[name="InitialMobileNumber"]', 'your-mobile-number');  // Replace with actual field name
    await page.fill('input[name="InitialPassword"]', 'your-password');  // Replace with actual field name
    await page.fill('input[name="InitialConfirmPassword"]', 'your-password');  // Replace with actual field name

    // Submit the initial signup form
    await page.click('button[type="submit"]');

    // Wait for navigation to the next step
    await page.waitForNavigation();

    // Assuming automatic redirection to the next step page
    // If needed, explicitly navigate to the new step URL
    // await page.goto('https://doctor.vaccinationcentre.com/signup/step1');

    // Fill in the form on the new step page
    await page.fill('input[name="Step1Field1"]', 'value1');  // Replace with actual field name
    await page.fill('input[name="Step1Field2"]', 'value2');  // Replace with actual field name
    // Add additional fields as needed

    // Submit the form on the new step page
    await page.click('button[type="submit"]');

    // Wait for confirmation or redirection after completing the signup process
    await page.waitForNavigation();

    // Optionally, you can verify if the signup was successful
    await expect(page.locator('text=Signup successful')).toBeVisible();  // Replace with actual confirmation text or selector

    // Navigate to the login page
    await page.goto('https://doctor.vaccinationcentre.com/login');

    // Enter the mobile number for login
    await page.fill('input[name="MobileNumber"]', 'your-mobile-number');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    await page.waitForNavigation();

    // Verify if the login was successful
    await expect(page).toHaveURL('https://doctor.vaccinationcentre.com/dashboard');
    // or
    // await expect(page.locator('text=Logout')).toBeVisible();

    // Close the browser
    await browser.close();
});*/
