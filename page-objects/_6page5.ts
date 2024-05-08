import { expect } from "@playwright/test";

export async function validatePage5(page: any) {
  await expect(page.locator('.end-screen__title')).toBeVisible();

}
