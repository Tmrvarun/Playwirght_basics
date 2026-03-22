import {test,except,Browser,Page,Locator} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

// focus gives us advantage to page focus on a particular attribute and to accept any cookies or click on popup

test('fileupload',async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://orangehrm.com/en/30-day-free-trial");
    await page.getByText("This website uses cookies").focus()
    await page.getByText("Allow All").click()
    

    await page.waitForTimeout(2000);
    const fullname=await page.locator("id=Form_getForm_subdomain");
    await fullname.focus()
    await fullname.fill("Varun Tomar");

    await page.waitForTimeout(2000);
})