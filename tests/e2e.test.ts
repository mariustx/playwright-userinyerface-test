import { test, expect } from "@playwright/test";
import { StartPage } from "../page-objects-classes/_1start-page-class";
import { Page1 } from "../page-objects-classes/_2page1-class";

test.beforeEach('Open the start page', async ({ page }) => {
    await page.goto('/');
  });

test('Complete basic flow', async ({ page }) => {
    
    const myStartPage = new StartPage(page);
    const myPage1 = new Page1(page);

    myStartPage.clickStartLink();
    myPage1.completePage1('Passwords1','omail','omain');
    await expect(page.locator('.login-form__container')).toBeVisible();
});

test.afterEach('Close the browser', async ({ context }) => {
    await context.close();
  });