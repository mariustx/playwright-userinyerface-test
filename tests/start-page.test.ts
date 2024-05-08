import { test, expect } from "@playwright/test";
import { StartPage } from "../page-objects-classes/_1start-page-class";

test.beforeEach('Go to home page', async ({ page }) => {
    await page.goto('/');
});


test('Complete start-page', async ({ page }) => {
    await page.locator('.start__link').click();
    await expect(page.locator('.login-form__container')).toBeVisible();
});

test('Complete start-page (class)', async ({ page }) => {

    const myStartPage = new StartPage(page);
    myStartPage.clickStartLink();
    await expect(page.locator('.login-form__container')).toBeVisible();
});