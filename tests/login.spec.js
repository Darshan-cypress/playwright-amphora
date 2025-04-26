import {test, expect }  from '@playwright/test' ;

import logindata  from  "../testdata/login.json";


test.beforeEach(async({page})=>{
    
    await page.goto("https://amphora.net")    
   
 })
 
 test.afterEach(async({page})=>{
   
    await expect(page).toHaveURL("https://amphora.net/newsletter-sign-up/")
 
 })

test('Newsletter logindetails@smoke', async ({page}) => {

    await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)');
    await page.locator("li[id='menu-item-511'] a").click();
    await page.locator("input[placeholder='eg: john.smith@acmecorp.com']").fill(logindata.emailid);
    await page.locator("input[placeholder='eg: John']").fill(logindata.firstname);
    await page.locator("input[placeholder='eg: Smith']").fill(logindata.lastname);
    await page.locator("button[type='submit']").click();
 
  })