import {test,except,Browser,Page} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

test('mouse clicks',async()=>{
    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    //await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    //double click 
   // await page.getByText('Double-Click Me To See Alert').dblclick();

    //right click
   // await page.getByText('right click me').click({button:'right'});

    //shift +click :

    // await page.goto('https://the-internet.herokuapp.com/shifting_content');
    // await page.getByText('Example 1: Menu Element').click({modifiers:['Shift']});

    //mouse hover:

    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover();
    await page.getByText('Visa Services').first().click();



    await page.waitForTimeout(5000);
    






})