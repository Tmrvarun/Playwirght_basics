import{test,Except,Browser,Page} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

test('Mouse action',async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page= await browser.newPage();
    // await page.goto('https://www.spicejet.com/');

    // await page.getByText('Add-ons').first().hover();
    // await page.getByText('Extra Seat').first().click();


    await page.goto('https://www.bigbasket.com/');

    await page.locator('//*[@id="headlessui-menu-button-:Ramkj6:"]/div').click();

   await page.getByText('Beverages').hover();
//    await page.getByText('Tea').first().hover();
//    await page.getByText('Green Tea').first().click();
//    await page.getByText('Snacks & Branded Foods').first().hover();
//    await page.getByText('Biscuits & Cookies').first().hover();
//    await page.getByText('Cookies').first().click();
//    page.getByText('Add-Ons').first().hover();

    await page.waitForTimeout(3000);



})