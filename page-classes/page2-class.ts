import { Page } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page2 extends Forms {
    private readonly downloadButton: string;
    private readonly uploadButton: string;
    private readonly nextButton: string;
    private readonly poniesCheckbox: string;
    private readonly poloCheckbox: string;
    private readonly doughCheckbox: string;
    private readonly selectallCheckbox: string;
    private readonly unselectallCheckbox: string;

    constructor(page: Page) {
        super(page);
        this.downloadButton = ':nth-child(3) > .button';
        this.uploadButton = '.avatar-and-interests__upload-button';
        this.nextButton = ':nth-child(1) > .button--white';
        this.poniesCheckbox = '[for="interest_ponies"]';
        this.poloCheckbox = '[for="interest_polo"]';
        this.doughCheckbox = '[for="interest_dough"]';
        this.selectallCheckbox = '[for="interest_selectall"]';
        this.unselectallCheckbox = '[for="interest_unselectall"]';
    }

    async completePage2(page: any, interest1: string, interest2: string, interest3: string) {

        await this.downloadImageAndSave(page);

        await this.uploadImageViaFileChooser(page);

        const checkboxes = ['unselectall', interest1, interest2, interest3];
        for (const interest of checkboxes) {
            await page.locator(this.createCheckboxSelector(interest)).click();
        }

        await page.locator(this.nextButton).click();

    }

    async uploadImageViaFileChooser(page: any) {
        let [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            page.locator(this.uploadButton).click(),
        ]);
        await fileChooser.setFiles(["download\\avatar.png"]);
    }

    async downloadImageAndSave(page: any) {
        const downloadPromise = page.waitForEvent('download');
        await page.locator(this.downloadButton).click();
        const download = await downloadPromise;
        await download.saveAs('download/' + download.suggestedFilename());
    }

    createCheckboxSelector(interest: string) {
        return `[for="interest_${interest}"]`;
    }
}