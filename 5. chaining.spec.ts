// Chaining concept is used to form a chain element in a webpage eg in a online page form 
// in playwright there is a seperate tool for chaining which can be seen in playwright test explorer, > pick locator page  and under console
// we use '>>' as chaining operator
// we can also use get by role and locator combinations to perform any operation
// we can simply create a locator through chaining and perform our operation


import {test,except,Browser,Page,Locator} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

test('chaining', async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://orangehrm.com/en/30-day-free-trial");

    // Approach 1: 

    //const form= await page.locator('form#Form_getForm >> #Form_getForm_Name').fill("Varun Tomar");

    // approach 2: 

    const form= await page.locator('id=Form_getForm_Name');
    const btn= await page.getByRole('button',{name:'Get Your Free Trial'})
    await form.locator(btn).click();

    //approach 3:

    const form2=await page.locator('id=Form_getForm_Name');
    await form2.getByRole('button',{name:'Get Your Free Trial'}).click();

})
