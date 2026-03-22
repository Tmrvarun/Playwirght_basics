//this locator type is mostly used in accessibility testing 

//usually it is slower than css, css is the powerful and most fast 

// get by test id ia also a similar kind of locator , useful for pages where dev insert test ids, eg in amazon 

// test id can be modified to any name in playwright config file 



import {test,expect,Browser,Locator,Page} from '@playwright/test'
import {firefox,chromium,webkit} from 'playwright'

test ('getbyrole',async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await expect(page.getByRole('heading',{name:'Register Account'})).toBeVisible();

    await expect(page.getByRole('radio',{name:'Yes'})).toBeVisible(); //here radio is role and name is the locator name 
    //await expect(page.getByRole('checkbox',{name:'agree'})).toBeVisible();

    await expect(page.getByRole('link',{name:'Forgotten Password'})).toBeVisible();

    new Promise (() => {})


})