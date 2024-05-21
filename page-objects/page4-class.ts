import { Page, expect } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page4 extends Forms {
    private readonly pictureCheckbox: string;
    private readonly validateButton: string;

    constructor(page: Page) {
        super(page);
        this.pictureCheckbox = '.checkbox';
        this.validateButton = ':nth-child(5) > .button--blue';
    }

    async completePage4(page: any) {
        const checkbox = page.locator(this.pictureCheckbox);

        await expect(checkbox).toHaveCount(16);

        for (const chk of await checkbox.all()) {
            // click, other actions
            await chk.click();
        }

        await page.locator(this.validateButton).click();
    }

}