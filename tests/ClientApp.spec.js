 const {test, expect} = require('@playwright/test');
const { type } = require('os');

test('WebShop', async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("anshika@gmail.com");
  await page.locator("#userPassword").type("Iamking@000");

  await page.locator("[value='Login']").click();
 await page.waitForLoadState('networkidle'); //Ceka da mrezni zahtevi prestanu da se salju pre nego sto nastavi dalje
  // ceka da se stranica potpuno ocita

// await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});

test.only('Register', async({page})=>
  {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".btn1").click();
    const userName = page.locator("[type='firstName']");
    const lastName = page.locator("[type='lastName']");
    const email = page.locator("[type='email']");
    const phone = page.locator("#userMobile");
    const dropdown = page.locator("select.custom-select");
    await dropdown.selectOption("4: Scientist"); //Vrednost u value
    await page.locator("[type='radio'][value='Female']").click();
    await expect(page.locator("[type='radio'][value='Female']")).toBeChecked();
    console.log(await page.locator("[type='radio'][value='Female']").isChecked());

    await page.locator("[type='checkbox']").click();
    await expect( page.locator("[type='checkbox']")).toBeChecked();
    await page.locator("[type='checkbox']").uncheck();
    console.log(await page.locator("[type='checkbox']").isChecked());

    await userName.type("Katarina");
    await lastName.type("Stojanovic");
    await email.fill("test@gmail.com");
    await phone.fill("0123456789");




  });



