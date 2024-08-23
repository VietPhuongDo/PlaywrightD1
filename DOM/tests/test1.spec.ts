import { test, expect } from "@playwright/test";


function generateXpath(fields:string){
    return `//input[@id='${fields}']`
}

test('lesson1 ', async ({page}) =>{
    await test.step('step 1:go to playwright page',async() =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step('step 2:go to register page',async()=>{
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();
    })

    await test.step('step 3: fill the form', async () => {
        await page.locator(generateXpath("username")).fill("username");
        await page.locator(generateXpath("email")).fill("email@gmail.com");
        await page.locator(generateXpath("male")).check();
        await page.locator(generateXpath("reading")).check();
        await page.locator("//select[@id='country']").selectOption("canada")
        await page.locator(generateXpath("dob")).fill('2002-09-20'); //YYYY-MM-DD
        await page.locator(generateXpath("profile")).setInputFiles("/Users/phuongdo/Downloads/e71633da1b3eb960e02f.jpg");
        await page.locator("//textarea").fill("Phuong's bio");
        await page.locator(generateXpath("rating")).fill('8');
        await page.locator(generateXpath("favcolor")).fill('#00ff00');
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator(generateXpath("newsletter")).click();
        await page.locator("//button[text()='Register']").click();
        
    })
})

