import {test,except,Browser,Page,Location} from '@playwright/test'
import {chromium,webkit,firefox} from 'playwright'


// am element performs following autochecks before performing any operation like , click(),check(),fill() etc: 
    // element is visible, element is non overllaping ,element is enabled ,  element is stable

test.use({
    actionTimeout:1500 // here we are setting 15 seconds as default timer for all test , irrespective of setting timeouts in each tests individually
})

test('auto wait concept',async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://www.bigin.com/signup.html?plan=free&?source_from=powerful-and-free-crm-lp-a");
    await page.getByText('I agree to the  ').check({timeout:3000}); // here we are setting timeout fot this element only ,to 3 sec, for other test the timepot will remain for 15 sec as defines in test.use method

    await page.setDefaultTimeout(3000); // here we are setting default time out for page to 3 sec
    //Test timeout of 30000ms exceeded default timer of 30 seconds in playwright
})

test('auto wait concept2',async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://www.bigin.com/signup.html?plan=free&?source_from=powerful-and-free-crm-lp-a");
    await page.getByText('I agree to the  ').check({timeout:3000}); // here we are setting timeout fot this element only ,to 3 sec

    await page.setDefaultTimeout(3000); // here we are setting default time out for page to 3 sec
    //Test timeout of 30000ms exceeded default timer of 30 seconds in playwright
})