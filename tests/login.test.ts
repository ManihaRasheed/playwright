import {chromium, test} from "@playwright/test"

// launching browser

test ("Login Test", async () => {
    const browser = await chromium.launch({
            headless:true
        }
    );  
    const context = await browser.newContext(); //new browser context
    const page = await context.newPage(); //new tab

    await page.goto("https://ecommerce-playground.lambdatest.io/", { timeout: 60000 })
    
} 
)
 