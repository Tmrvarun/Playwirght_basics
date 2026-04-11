//steps to be performed:
// go to browser
//open page
//enter url
//find locators for email and password
// enter credentials and click login button
// check the page title 


// Initially we import test, expect , browser,page, locators from playwright
// here test is a function variable in which we write our test, expect is used to compare any condition with expected result
// browser , page and locators are variable used for their name

// then we impoer browser types , chromium, firefox and safari from playwright or playwright/test

// then we write our test followed by {} , in this we user async function , as an arrow function , which is used to counter the asynchronous api or browser calls
// async function always use keyword await, to invoke the custom waits 
// here we use locators as term for webelemnts 

// to run our test we use command "npx playwright test" in terminal

// always save our file with name.spec.ts otherwise no file found error appears






import {test, expect, Browser, Page, Locator} from '@playwright/test' //test is a function through which we run our test // browser and page are also required
import {chromium,webkit,firefox} from 'playwright'

test('test login',async ()=>{
    const browser:Browser=await firefox.launch({'headless':false}); // here await is returning a type , so we store that in const browser, and since it is browser type so we write Browser after colon here
    const page:Page =await browser.newPage();// open new page and store it in page variable
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login") // app url

    const emailid:Locator=await page.locator('#input-email'); // webelements , if we know the variable then we use # here for direct denotion
    const pwd:Locator=await page.locator('#input-password');
    const login:Locator=await page.locator("[value='Login']");// since name and typw were not there , so we wrote full locator here in bracket with value

    await emailid.fill('pwtest@opencartlogin.com'); // entering username 
    await pwd.fill('playwright@123');
    await login.click(); // clicking the button
    const title=await page.title(); //page  title capturing 
    console.log("Page title is: ",title);
    expect(title).toEqual('My Account');// using expect keyword from import here to compare the title with expected title
    await browser.close();// browser close, while importing a method , only keyword gets imported , so we have to give bracket here 
})
