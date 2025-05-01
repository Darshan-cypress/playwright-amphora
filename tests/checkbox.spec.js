import {test, expect }  from '@playwright/test' ;


test('verify checkbox',async({page})=>{

// await page.goto("https://demo.guru99.com/test/radio.html")
// //await page.$$('input[type="checkbox"]').check()
// //const chechbox=['input[value="checkbox1"]','input[value="checkbox2"]','input[value="checkbox3"]'];


// const checkboxs = await page.$$('input[type="checkbox"]');
// console.log(checkboxs.length)
// for (let checkbox of checkboxs){
//     const ischecked = await checkbox.isChecked();

//     if (!ischecked){
//         await checkbox.check({force:true})
//         await page.waitForTimeout(5000);
//     }

// }

await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

//const dropdown=page.locator("option").allTextContents();
const dropdown=await page.locator('select[class="middle month"] option').allTextContents();
console.log(dropdown)



})
