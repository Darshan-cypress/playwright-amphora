
import {test, expect }  from '@playwright/test' ;


test.beforeEach(async({page})=>{ 
    await page.goto("https://amphora.net")     
})


test.afterEach(async({page})=>{
    await expect(page).toHaveURL("https://amphora.net/")
})


test('amphora Symphony CTRM @sanity', async ({page}) => {
    await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
    await page.locator('//div[@class="nav__inner"]/ul[1]/li[1]/ul/li[1]').click();
    await page.goBack();
 })

 
 test('amphora Alchemy CTRM @smoke', async ({page}) => {
   await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
   await page.locator("li[id='menu-item-384'] a").click()
   await page.goBack();
 })


 test('amphora VaR Module @regression', async ({page}) => {
   await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
   await page.locator("li[id='menu-item-108'] a").click();
   await page.goBack();
 })


 test('amphora Trade confirmations manager @smoke', async ({page}) => {
    await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
    await page.locator("//li[@id='menu-item-70']//a[normalize-space()='Trade confirmations manager']").click();
    await page.goBack();
 })


 test('amphora Freight manager@sanity', async ({page}) => {
   await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
   await page.locator("li[id='menu-item-69'] a").click();
   await page.goBack();
 })


 test('amphora Claims manager@regression', async ({page}) => {
   await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
   await page.locator("li[id='menu-item-68'] a").click();
   await page.goBack();
 })


 test('amphora Symphony Credit@sanity', async ({page}) => {
   await page.hover('body > header:nth-child(4) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
   await page.locator("//li[@id='menu-item-67']//a[normalize-space()='Symphony Credit']").click()
   await page.goBack();
 })





