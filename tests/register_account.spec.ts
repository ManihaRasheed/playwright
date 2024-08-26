import {test, expect, Browser, Page} from '@playwright/test'
import {chromium} from 'playwright'

test('register test', async() => {

// Launch Chromium browser in non-headless mode

    const browser: Browser = await chromium.launch({headless: false})
    const page: Page= await browser.newPage();

// Navigate to the register page

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

// Locate the first name, last name, email, telephone, passwords, check and continue buttons
    
    const firstname =  await page.locator('#input-firstname') //without using await from line 17 to 25 it can also work 
    const lastname =  await page.locator('#input-lastname')
    const email = await page.locator('#input-email')
    const telephone = await page.locator('#input-telephone')
    const password = await page.locator('#input-password')
    const passwordconfirm = await page.locator('#input-confirm')
    const radiobutton = await page.locator("input[name='newsletter'][value='0']")
    const checkbox = await page.locator("input[name='agree'][value='1']")
    const continueButton = await page.locator("[value='Continue']")



// Fill in first name, last name, email, telephone, password, then click the radio/check and continue button

    await firstname.fill("Mani")
    await lastname.fill("Rasheed")
    await email.fill("maniraed69068@mail.com")
    await telephone.fill("03085369444")
    await password.fill("1234mani")
    await passwordconfirm.fill("1234mani")
    await radiobutton.check()
    await checkbox.check() 
    await continueButton.click()

// Capture the page title after register and print it

    const title= await page.title()
    console.log("Account Registered", title)

// Take a screenshot of the register page

    await page.screenshot({path: 'registerpage.png'})

// Validate that the page title is as expected

    expect (title).toEqual('Your Account Has Been Created!')

    await browser.close()
    
})




























// Locate the continue button on the new page 
// Locate the "Continue" button using the href attribute

/*const continuebutton = page.locator('a.btn.btn-primary[href="https://naveenautomationlabs.com/opencart/index.php?route=account/account"]');

// Ensure the continue button is visible and clickable

    await continuebutton.waitFor({ state: 'visible', timeout: 60000 });
    await continuebutton.click()

// Wait for navigation after clicking continue

await Promise.all([
    page.waitForNavigation({ timeout: 60000 }), // Wait for navigation to complete
    continueButton.click() // Trigger navigation
]);
// Capture the home page title and screenshot

    const title1= await page.title()
    console.log("Home Page", title1)

    await page.screenshot({path: 'homepage1.png'})

    // Validate the home page title

    expect (title).toEqual('My Account')*/

 // Close the browser