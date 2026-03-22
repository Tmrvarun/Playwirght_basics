import {test,except,Browser,Page,Locator} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

test('fileupload',async()=>{
    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

    await page.locator('//input[@name="upfile"]').setInputFiles("F:/Computer Games/TEKKEN 3/A.psv");
    await page.waitForTimeout(3000)



})