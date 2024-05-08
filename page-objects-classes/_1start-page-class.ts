import { Page } from '@playwright/test';

export class StartPage {
    private readonly logoIcon = '.logo__icon';
    private readonly firstParagraph = '.start__paragraph:nth-child(1)';
    private readonly secondParagraph = '.start__paragraph:nth-child(2)';
    private readonly startButton = '.start__button';
    private readonly startLink = '.start__link';

    constructor(private readonly page: Page) {}

    async completeStartPage() {
        await this.page.locator(this.startLink).click();
    }

    async getLogoIcon() {
        return await this.page.$(this.logoIcon);
    }

    async getFirstParagraph() {
        return await this.page.$(this.firstParagraph);
    }

    async getSecondParagraph() {
        return await this.page.$(this.secondParagraph);
    }

    async clickStartButton() {
        await this.page.click(this.startButton);
    }

    async clickStartLink() {
        await this.page.click(this.startLink);
    }

}

// Example usage:
// import { chromium } from 'playwright';
// const browser = await chromium.launch();
// const context = await browser.newContext();
// const page = await context.newPage();
// const userInyerfacePage = new UserInyerfacePage(page);
// await userInyerfacePage.navigateToStartPage();
// const logo = await userInyerfacePage.getLogoIcon();
// console.log(`Logo icon text: ${await logo.textContent()}`);
// await browser.close();
