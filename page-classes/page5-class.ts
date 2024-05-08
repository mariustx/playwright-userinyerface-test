import { Page, expect } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page5 extends Forms {
    private readonly passwordField: string;
    private readonly emailField: string;

    constructor(page: Page) {
        super(page);
        this.passwordField = '.login-form__field-row > input';
        this.emailField = ':nth-child(1) > .input';

    }

    async validatePage5(page: any) {
        await expect(page.locator('.end-screen__title')).toBeVisible();

    }

}