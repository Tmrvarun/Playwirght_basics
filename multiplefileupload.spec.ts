import{test,except,Browser,Page,Locator,Buffer,From} from '@playwright/test';
import path from 'path';
import {chromium,firefox,webkit} from 'playwright';

//multiple :this tag should be present in css else it will be considered that multiple file upload is not supported 

test('Multiple upload',async()=>{
    const browser:Browser=await firefox.launch({headless:false})
    const page:Page=await browser.newPage();
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // await page.locator('//input[@id="filesToUpload"]') //select multiple files
    //  .setInputFiles([
    //     path.join("F:/Computer Games/TEKKEN 3/A.psv"),
    //     path.join("F:/Computer Games/TEKKEN 3/hh.psv"),
    //     path.join("F:/Computer Games/TEKKEN 3/quicksave_SCES_012.37_5.psv")])

    // await page.waitForTimeout(3000);

    // await page.locator('//input[@id="filesToUpload"]').setInputFiles([]); // deselct the files 


    //buffer file 

    await page.locator("//input[@id='filesToUpload']").setInputFiles({
        name: 'Varun file.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is test file')});

    await page.waitForTimeout(3000);
    



})