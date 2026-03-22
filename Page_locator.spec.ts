import {test,expect,Browser,Page} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'
import type Locator = require('@playwright/test');


test('Locator test', async ()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    // Practice 
    // await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // const uname=await page.locator("//input[@name='email']");
    // const pwd=await page.locator("id=input-password");
    // const login_btn=await page.locator("css=input[value='Login']");
    // await uname.fill("pwtest@opencartlogin.com");
    // await pwd.fill("playwright@123");
    // await login_btn.click();


    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // 1. find locator by id:

    const frstname=await page.locator('id=input-firstname');
    await frstname.fill('test user');
    
    //2 find locator by class name:

    const lastname= await page.locator('.img-responsive')
    const test=await lastname.isEnabled();
    await console.log(test);

    //3 find elememt by text:

    const email=await page.locator('text=E-Mail');
    await email.fill('playwright.user1@test.com')

    //4 find element by css :

    const lstname=await page.locator("input[name='lastname']");
    await lstname.fill('user last name')

    //5 find element by id:

    const telnum=await page.locator('//input[@type="tel"]');
    await telnum.fill("123456789");


    await new Promise(() => {})


    
})