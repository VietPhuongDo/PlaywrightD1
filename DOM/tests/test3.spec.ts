import {test,expect} from '@playwright/test';

test('lesson3' , async ({page}) => {
    await test.step('Step 1: Go to playwright material', async () =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step('Step 2: go to Lesson 2 Page', async() =>{
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
})

    await test.step('Step 3: Add 100 To Do tasks', async() =>{
        for (let i = 1; i <= 100; i++){
    
            await page.locator('//input[@id="new-task"]').fill("To do " + `${i}` );
            await page.locator('//button[@id="add-task"]').click();
        }

        page.on('dialog',async dialog => dialog.accept());

        for (let i = 1; i <= 100; i += 2) {
            let deleteString = `to-do-${i}-delete`;
            let xpath = `//button[@id="${deleteString}"]`
            await page.locator(xpath).click();
        }
        
       
    })

   


})
