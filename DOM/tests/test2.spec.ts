import { test, expect } from "@playwright/test";

test('lesson2', async ({page}) => {
    await test.step('Step 1: go to Playwright Material', async () =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step('Step 2: go to Lesson 2 Page', async() =>{
        await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    })

    await test.step('Step 3: Add to cart', async() => {
        await page.locator('//button[@data-product-id="1"]').click({clickCount:2})

        await page.locator('//button[@data-product-id="2"]').click({clickCount:3});

        await page.locator('//button[@data-product-id="3"]').click();
    })

})