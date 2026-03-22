import {test,except,Browser,Page,Locator} from '@playwright/test'
import {chromium,firefox,webkit} from 'playwright'

test('Drag drop',async()=>{

    const browser:Browser=await firefox.launch({headless:false});
    const page:Page=await browser.newPage();
    page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    //mouse steps:
    
    // await page.locator('id=draggable').hover();
    // await page.mouse.down();
    // await page.locator("id=droppable").hover();
    // await page.mouse.up();

    //direct method:

    await page.locator('id=draggable').dragTo(page.locator('id=droppable'));
})