import {test, expect} from '@playwright/test';


function toXpath(fields: string){
    return `//input[@id='${fields}']`
}

let notes = [
    {title: 'tile 1',description:'title 1 desscription'},
    {title: 'tile 2',description:'title 2 desscription'},
    {title: 'tile 3',description:'title 3 desscription'},
    {title: 'tile 4',description:'title 4 desscription'},
    {title: 'tile 5',description:'title 5 desscription'},
    {title: 'tile 6',description:'title 6 desscription'},
    {title: 'tile 7',description:'title 7 desscription'},
    {title: 'tile 8',description:'title 8 desscription'},
    {title: 'tile 9',description:'title 9 desscription'},
    {title: 'tile 10',description:'title 10 desscription'},
];

test('Lesson 4 add notes', async ({page}) => {
    await test.step('Step 1: Go to playwright material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step('Step 2: Go to lesson 4', async () => {
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    await test.step('Step 3: Add notes', async () => {
        for(let i=0; i<notes.length; i++){
            await page.locator(toXpath("note-title")).fill(notes[i].title);
            await page.locator("//textarea[@id='note-content']").fill(notes[i].description);
            await page.locator("//button[@id='add-note']").click();
        }
    })

    await test.step('Step 4: Search function', async () => {
        for(let i=0; i<notes.length; i++){
            await page.locator(toXpath("search")).fill(notes[i].title);
            await page.locator(toXpath("search")).clear()
        }
    })

})



