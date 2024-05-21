import { Page } from "@playwright/test";
import { Index } from "./index-class";

export class Start extends Index {
    private readonly firstParagraph: string;
    private readonly secondParagraph: string;
    private readonly startButton: string;
    private readonly thirdParagraph: string;
    private readonly startLink: string;

    constructor(page: Page) {
        super(page);
        this.firstParagraph = '.start__paragraph:nth-child(1)';
        this.secondParagraph = '.start__paragraph:nth-child(2)';
        this.startButton = '.start__button';
        this.thirdParagraph = '';
        this.startLink = '.start__link';
    }

    async completeStartPage() {
        await this.page.locator(this.startLink).click();
    }
}