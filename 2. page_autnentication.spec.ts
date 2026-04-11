import {test,Except,Browser,Page,BrowserContext} from '@playwright/test'
import {Chromium,firefox,webkit} from 'playwright'

test('test auth', async()=> {
    const browser:Browser=await webkit.launch({headless:false});
    const context_page:BrowserContext=await browser.newContext();
    const launch:Page=await context_page.newPage();

    const username='admin'; // page username
    const password='admin'; // page password
    const auth='Basic ' +btoa(username+':'+password); // authntication header which we get from postman "//Authorization: Basic YWRtaW46YWRtaW4="
    launch.setExtraHTTPHeaders({Authorization:auth}); //passing the haeder value to this function 


    launch.goto("https://the-internet.herokuapp.com/basic_auth");

    await new Promise(() => {})




})
