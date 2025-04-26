import {test, expect }  from '@playwright/test' ;


test.beforeEach(async({page})=>{
    
   await page.goto("https://amphora.net")    
  
})

test.afterEach(async({page})=>{
  
   await expect(page).toHaveURL("https://amphora.net/")

})

test('Press Releases@sanity', async ({page}) => {

    await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)');
    await page.locator("li[id='menu-item-204'] a").click();
    await page.goBack();
    
 })

 test('News articles@smoke', async ({page}) => {

    await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)');
    await page.locator("li[id='menu-item-468'] a").click();
    await page.goBack();

 })

 test('Newsletter sign-up@regression@smoke', async ({page}) => {

    await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)');
    await page.locator("li[id='menu-item-511'] a").click();
    await page.goBack();

 })

