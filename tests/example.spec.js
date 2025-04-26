import { test, expect } from '@playwright/test';


test.skip('Verify Example', async ({ page }) => {


  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
  await page.locator("//input[@placeholder='Username']").fill("Admin");

  await page.locator("input[type='password']").fill("admin123");

  await page.locator("button[type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


})