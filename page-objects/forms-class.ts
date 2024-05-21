import { Page } from "@playwright/test";
import { Game } from "./game-class";

export class Forms extends Game {
    private readonly paginationItem1: string;
    private readonly paginationItem2: string;
    private readonly paginationItem3: string;
    private readonly paginationItem4: string;
    private readonly helpForm: string;
    private readonly sendToBotButton: string;
    private readonly hurryModal: string;
    private readonly cancelModal: string;

    constructor(page: Page) {
        super(page);
        this.paginationItem1 = '';
        this.paginationItem2 = '';
        this.paginationItem3 = '';
        this.paginationItem4 = '';
        this.helpForm = '';
        this.sendToBotButton = '.help-form__send-to-bottom-button';
        this.hurryModal = '';
        this.cancelModal = '';
    }

    async clickSendToBotButton(page: any) {
        await page.locator(this.sendToBotButton).click();
    }
}