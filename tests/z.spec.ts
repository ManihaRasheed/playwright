import {chromium, test} from "@playwright/test"

// launching browser

test ("doctorz", async () => {
    const browser = await chromium.launch({
            headless:false
        }
    );  
    const context = await browser.newContext(); //new browser context
    const page = await context.newPage(); //new tab

    await page.goto("https://doctor.vaccinationcentre.com/login")

    await page.pause()
    
} 
)
 