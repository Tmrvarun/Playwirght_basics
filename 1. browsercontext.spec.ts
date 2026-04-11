// browsewr context is used to creare multiple browser session in multiple incognito windows
//each session is seperate and has its own cookies and settings, they does not interact with each other 
// useful for chatbots where two different users interact with same time login
// selenium has this limitation , if we save chnages for one user then we have to do multiple time login , playwright solves the problem very well

import {test,Expect,Browser,Page,Locator,BrowserContext} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

test('browser context', async ()=>{

    //main browser 

    const browser:Browser=await firefox.launch({headless:false});
    

    //browser context 1:

    const browser_context1:BrowserContext=await browser.newContext();
    const context1_page:Page=await browser_context1.newPage();

    //browser context 2:
    const browser_context2:BrowserContext=await browser.newContext();
    const context2_page:Page=await browser_context2.newPage();


    // pag1 login with user 1:
    await context1_page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const pag1_email=await context1_page.locator("#input-email");
    const pag1_pwd=await context1_page.locator("#input-password");
    const pag1_login_btn=await context1_page.locator("[value='Login']");

    await pag1_email.fill('pwtest@opencartlogin.com'); // entering username 
    await pag1_pwd.fill('playwright@123'); 
    await pag1_login_btn.click();

    // page 2 login with user 2 : pwtest1@opencartlogin.com/test@123
    await context2_page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const page2_login=await context2_page.locator("#input-email");
    const page2_pwd=await context2_page.locator("#input-password");
    const page2_login_btn=await context2_page.locator("[value='Login']");

    await page2_login.fill("pwtest1@opencartlogin.com");
    await page2_pwd.fill("test@123");
    await page2_login_btn.click();

    await browser_context1.close();
    await browser_context2.close();
    await new Promise(() => {})



});
