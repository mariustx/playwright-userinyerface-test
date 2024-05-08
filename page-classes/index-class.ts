import { Page } from "@playwright/test";

export class Index {
    private readonly logoIcon: string;
    private readonly footerLogo: string;

    constructor(protected readonly page: Page) {
        this.logoIcon = '.logo__icon';
        this.footerLogo = '.footer__logo';
    }

}
