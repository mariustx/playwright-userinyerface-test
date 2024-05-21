import { Page, expect } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page5 extends Forms {
    private readonly endTitle: string;

    constructor(page: Page) {
        super(page);
        this.endTitle = '.end-screen__title';

    }

    async validatePage5(page: any) {
        await expect(page.locator(this.endTitle)).toBeVisible();
    }

}