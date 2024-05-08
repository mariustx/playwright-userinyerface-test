import { Page, expect } from "@playwright/test";
import { Index } from "./index-class";

export class Game extends Index {
    private readonly timer: string;

    constructor(page: Page) {
        super(page);
        this.timer = '.timer';

    }

    async checkIfGameIsStarted() {
        await expect(this.page.locator(this.timer)).toBeVisible();
    }


}