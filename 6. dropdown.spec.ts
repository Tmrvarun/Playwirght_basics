import {test,expect,Browser,Page,Locator} from '@playwright/test'
import selectors = require('@playwright/test');
import {chromium,firefox,webkit} from 'playwright'

test('dropdown', async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/PALI");

    //const country_code= 'select#Contact_CountryCode'; // element for selecting drop down


    //await page.selectOption(country_code,{value:'NI'}); // By value
    //await page.selectOption(country_code,{label:'India'}) // By label or index name
    //await page.selectOption(country_code,{index:5}); // By index number , starts from 0 
    const dropdown_allelement='select#Contact_CountryCode > option';

    const total=await page.$$(dropdown_allelement);
    console.log(total.length);

    for (const e of total){ // puts elements in e
        const ele=await e.textContent(); // takes test of element and sends it to ele
        console.log(ele); // print the element in each row

        if (ele==='India'){
            break;
        }

    }





    await page.waitForTimeout(3000);




})
