import {test,expect,Browser,Page,Locator} from '@playwright/test'
import{chromium,firefox,webkit} from 'playwright'

test('Delayed typing',async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://www.amazon.in/?tag=indiatimes2-21&gad_source=1");
    await page.locator("//input[@id='twotabsearchtextbox']").pressSequentially('macbooc',{delay:300})
    //await page.getByPlaceholder('Search Amazon.in').pressSequentially('macbooc',{delay:300});
})

