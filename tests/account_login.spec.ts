import {test, expect, Browser, Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('login test', async() => {

// Launch Firefox browser in non-headless mode

    const browser: Browser = await firefox.launch({headless: true})
    const page: Page= await browser.newPage();

// Navigate to the login page

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

// Locate the email, password fields, and login button
    
    const emailID =  await page.locator('#input-email')
    const password =  await page.locator('#input-password')
    const loginButton = await page.locator("[value='Login']")

// Fill in email and password, then click the login button

    await emailID.fill("maniharasheed123@gmail.com")
    await password.fill("1234mani")
    await loginButton.click() 

// Capture the page title after login and print it

    const title= await page.title()
    console.log("home page title", title)

// Take a screenshot of the homepage

    await page.screenshot({path: 'homepage.png'})

// Validate that the page title is as expected

    expect (title).toEqual('My Account')

 // Close the browser

    await browser.close()
    
})