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

-------------------------------------------------------------------


import {test,Browser,Locator,Page,Expect} from '@playwright/test'
import {firefox,chrome,webkit} from 'playwright'

test('drop down', async()=> {
    const browser:Browser=await firefox.launch({'headless':false})
    const page:Page=await browser.newPage()
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PALI')
    const dropdown:Locator= await page.locator('select#Contact_CountryCode')    

    // selecting drop down element by value:
    await dropdown.selectOption({value:'CV'})

    //selecting drop down element by index:

    await dropdown.selectOption({index: 10})

    //selecting drop down element by text/name/label:

    await dropdown.selectOption({label:'India'})

    const elements_select_list=await page.$$('select#Contact_CountryCode > option') // element stores options from element list , $$ is used to store element from the page
    console.log("Total elements in list is: ",elements_select_list.length)
    
 // Loop to iterate elements of the list :
 
    for (const e of elements_select_list)
    {
        
        //storing elements from the loop to element_name 
        const element_name= await e.textContent()
        console.log(element_name)

        //stopping loop at the element India and break the loop if element is searched

        if (element_name=='India')
        {
            await dropdown.selectOption({label:'India'})
            break;
        }
    }
        

 await page.waitForTimeout(5000)

})
