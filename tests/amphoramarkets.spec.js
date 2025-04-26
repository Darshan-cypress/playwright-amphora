import {test, expect }  from '@playwright/test' ;


test.beforeEach(async({page})=>{
    
   await page.goto("https://amphora.net")    
  
})

test.afterEach(async({page})=>{
   
   await expect(page).toHaveURL("https://amphora.net/")

})

test('Markets Oil & Products@regression@smoke', async ({page}) => {

   
    await page.hover("body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)");
    await page.waitForTimeout(3000); // waits for 3 seconds
    await page.locator("li[id='menu-item-140'] a").click();
    await page.goBack();
    

 })

 test('Markets Renewables@sanity', async ({page}) => {

    
    await page.hover("body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)");
    await page.waitForTimeout(3000); // waits for 3 seconds
    await page.locator("a[href='/amphora-wp/markets#renewables-and-transition-fuels']").click();
    await page.goBack();
    

 })


 test('Markets Petrochemical@smoke', async ({page}) => {

    
    await page.hover("body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)");
    await page.waitForTimeout(3000); // waits for 3 seconds
    await page.locator("li[id='menu-item-141'] a").click();
    await page.goBack();
    

 })


