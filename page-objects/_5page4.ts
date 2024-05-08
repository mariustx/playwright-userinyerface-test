import { expect } from "@playwright/test";

export async function completePage4(page: any) {
  const checkbox = page.locator('.checkbox');

  await expect(checkbox).toHaveCount(16);

  for (const chk of await checkbox.all()) {
    // click, other actions
    await chk.click();
  }

  await page.getByRole('button', { name: 'Validate' }).click();
}
