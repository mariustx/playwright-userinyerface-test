import { Page, expect } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page4 extends Forms {
    private readonly passwordField: string;
    private readonly emailField: string;

    constructor(page: Page) {
        super(page);
        this.passwordField = '.login-form__field-row > input';
        this.emailField = ':nth-child(1) > .input';

    }

    async completePage4(page: any) {
        const checkbox = page.locator('.checkbox');

        await expect(checkbox).toHaveCount(16);

        for (const chk of await checkbox.all()) {
            // click, other actions
            await chk.click();
        }

        await page.getByRole('button', { name: 'Validate' }).click();
    }

}