

import {test, expect} from "@playwright/test";

// Open web browser and verify title

test("Open Home Page and verify title", async ({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/',{ timeout: 30000 });
    await expect (page).toHaveTitle('Your Store')
})

test("Verify Logo ", async ({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/',{ timeout: 30000 });
    const logo= page.locator('#entry_217821')
    await expect(logo).toBeVisible()
    const image = logo.locator("img")
    await expect(image).toHaveAttribute("alt","Poco Electro")

})


test("Extract text content from multiple elements of navigation links", async ({page}) => {
    const expectedlinks = [
        "Home"
        , "Special"
        , "Hot"
        , "Blog"
        , "Mega Menu"
        , "AddOns"
        , "Featured"
        , "My account"]
    await page.goto('https://ecommerce-playground.lambdatest.io/');


    const nav= page.locator('#widget-navbar-217834 ')
    await page.waitForTimeout(5000)
    
 // Get the actual texts from the elements
     const actualTextArray = await nav.allInnerTexts();

 // Split the single received string into an array based on newline or other delimiters
     const receivedArray = actualTextArray.join('\n').split('\n').map(text => text.trim()).filter(text => text.length > 0);

 // Compare the actual and expected results
     expect(receivedArray).toEqual(expectedlinks);

     await expect(nav.first()).toBeVisible()
})


/*test('test inspection', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.locator('#entry_217945').click();
    await page.getByRole('button', { name: 'AddOns Featured' }).click();
    await page.getByRole('button', { name: 'AddOns Featured' }).click();
});*/

test('test inspection', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    
    const entry = page.locator('#entry_217945');
    await entry.waitFor({ state: 'visible', timeout: 30000 }); // Wait for element to be visible
    await entry.click(); // Click the element

    await page.getByRole('button', { name: 'AddOns Featured' }).click();
    await page.getByRole('button', { name: 'AddOns Featured' }).click();
});


