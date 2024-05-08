import test from "@playwright/test";

export const openStartPage = test.beforeEach('Open the start page',
    async ({ page }) => {
        await page.goto('/');
    });