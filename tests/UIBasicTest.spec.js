 const {test, expect} = require('@playwright/test');
// const { type } = require('os');

//  test('First test case',async ({browser})=>
//  {
// //    chrome -> plugins, cookies
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.saucedemo.com/");
//     console.log(await page.title());
//  });

//  test.only('Second test case',async ({page})=>
//     {
//    //    chrome -> plugins, cookies
//        // const context = await browser.newContext();
//        // const page = await context.newPage();
//        await page.goto("https://www.google.rs/");
//       console.log(await page.title());
//       await expect(page).toHaveTitle("Google");
//     });

test('Error login', async({browser})=>
{

  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator('#user-name');
  const signIn = page.locator("#login-button");
  await page.goto("https://www.saucedemo.com/");

  // css
  await userName.type("locked_out_user");
  await page.locator("[type='password']").type("secret_sauce");
  await signIn.click();

  await userName.fi("");
  await userName.fi("standard_user");
  await signIn.click();

});


 test.only('First test case',async ({browser})=>

 {
//    chrome -> plugins, cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
 });