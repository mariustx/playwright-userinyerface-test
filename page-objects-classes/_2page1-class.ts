import { Page } from 'playwright';

export class Page1 {
    private page: Page;
    private passwordField = ".login-form__field-row > input";
    private emailField = ":nth-child(1) > .input";
    private domainField = ":nth-child(3) > .input";
    private domainLevelDropDown = ".dropdown__field";
    private domainLevelOption1 = ".dropdown__list > :nth-child(2)";
    private termsConditionsCheckbox = ".checkbox__box > .icon";
    private nextButton = ":nth-child(1) > .button--secondary";

    constructor(page: Page) {
        this.page = page;
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordField).click();
        await this.page.locator(this.passwordField).clear();
        await this.page.locator(this.passwordField).fill(password);
       // await this.page.fill(this.passwordField, password);
    }

    async fillEmail(email: string) {
        await this.page.getByPlaceholder('Your email').click();
        await this.page.fill(this.emailField, email);
    }

    async fillDomain(domain: string) {
        await this.page.fill(this.domainField, domain);
    }

    async selectOrgDomain() {
        await this.page.click(this.domainLevelDropDown);
    }

    async clickNextButton() {
        await this.page.click(this.nextButton);
    }

    completePage1(password: string, email: string, domain: string) {
        this.fillPassword(password);
        this.fillEmail(email);
        this.fillDomain(domain);
        this.clickNextButton();
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
