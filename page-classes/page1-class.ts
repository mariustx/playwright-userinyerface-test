import { Page } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page1 extends Forms {
    private readonly passwordField: string;
    private readonly emailField: string;
    private readonly domainField: string;
    private readonly domainLevelDropDown: string;
    private readonly domainLevelOption1: string;
    private readonly domainLevelOption2: string;
    private readonly termsConditionsCheckbox: string;
    private readonly nextButton: string;

    constructor(page: Page) {
        super(page);
        this.passwordField = '.login-form__field-row > input';
        this.emailField = ':nth-child(1) > .input';
        this.domainField = ':nth-child(3) > .input';
        this.domainLevelDropDown = '.dropdown__field';
        this.domainLevelOption1 = '.dropdown__list > :nth-child(2)';
        this.domainLevelOption2 = '.dropdown__list > :nth-child(3)';
        this.termsConditionsCheckbox = '.checkbox__box';
        this.nextButton = ':nth-child(1) > .button--secondary';
    }

    async completePage1(page: any, password: string, email: string, domain: string) {
        this.clickSendToBotButton(page);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.emailField).fill(email);
        await this.page.locator(this.domainField).fill(domain);
        await this.page.locator(this.domainLevelDropDown).click();
        await this.page.locator(this.domainLevelOption1).click();
        await this.page.locator(this.termsConditionsCheckbox).click();
        await this.page.locator(this.nextButton).click();
    }
}