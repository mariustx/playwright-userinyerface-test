import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://userinyerface.com/game.html');
  await page.getByRole('button', { name: 'Send to bottom' }).click();
  
  await page.getByPlaceholder('Choose Password').fill('choosePass1');
  await page.getByPlaceholder('Your email').fill('youema');
  await page.getByPlaceholder('Domain').fill('omain');
  await page.locator('div').filter({ hasText: /^@otherother\.org\.co\.uk\.net\.gov\.de\.fr\.nl\.com\.be\.jpg$/ }).locator('span').click();
  await page.getByText('.org').click();
  await page.locator('label span').nth(1).click();
  await page.getByText('Next').click();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download image' }).click();
  const download = await downloadPromise;
  const suggestedFileName = download.suggestedFilename();
  const filePath = 'download/' + suggestedFileName;
  await download.saveAs(filePath);

  //await page.getByText('upload').click();
  //const uploadInput = page.getByText('upload');
  //await uploadInput.setInputFiles(['download/avatar.png']);

  let [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByText('upload').click(),
  ]);

  await fileChooser.setFiles(["c:\\Users\\spidy\\Documents\\Playwright\\Mangopay\\mangopay_repo\\download\\avatar.png"]);



  await page.locator('div:nth-child(21) > div > .checkbox > .checkbox__label > .checkbox__box > .icon').click();
  await page.locator('div:nth-child(15) > div > .checkbox > .checkbox__label > .checkbox__box').click();
  await page.locator('div:nth-child(8) > div > .checkbox > .checkbox__label > .checkbox__box').click();
  await page.locator('.checkbox__box').first().click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByPlaceholder('Placeholder...').first().fill('firstname');
  await page.getByPlaceholder('Placeholder...').nth(1).fill('zip');
  await page.getByPlaceholder('Placeholder...').nth(2).fill('city');
  await page.getByPlaceholder('Placeholder...').nth(3).fill('surname');
  await page.getByPlaceholder('Placeholder...').last().fill('street');
  await page.locator('.dropdown__opener').first().click();
  await page.getByText('Mrs').click();
  await page.locator('.date-dropdown__container > .dropdown > .dropdown__header > .dropdown__opener').first().click();
  await page.getByText('1', { exact: true }).nth(3).click();
  await page.getByText('Month').click();
  await page.getByText('April').click();
  await page.locator('div:nth-child(3) > .dropdown > .dropdown__header > .dropdown__opener > .icon').click();
  await page.getByText('2024').click();

  await page.locator('div').filter({ hasText: /^Choose a country$/ }).nth(3).click();
  await page.locator('.flag').first().click();

  /*
const slider = await page.locator('.slider__handle');
await slider.click({delay: 5000});
await page.mouse.move(10, 0);*/


  await page.getByRole('button', { name: 'Next' }).click();

  const checkbox = page.locator('.checkbox');

  await expect(checkbox).toHaveCount(16);

  for (const chk of await checkbox.all()) {
    // click, other actions
    await chk.click();
  }

  await page.getByRole('button', { name: 'Validate' }).click();

});