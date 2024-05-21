import { Page } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page3 extends Forms {
    private readonly firstNameField: string;
    private readonly zipField: string;
    private readonly cityField: string;
    private readonly surnameField: string;
    private readonly streetField: string;
    private readonly titleDropdown: string;
    private readonly titleMaleOption: string;
    private readonly titleFemaleOption: string;
    private readonly numberField: string;
    private readonly numberFieldUp: string;
    private readonly ageSlider: string;
    private readonly countryDropdown: string;
    private readonly countryAXOption: string;
    private readonly boxField: string;
    private readonly boxFieldUp: string;
    private readonly boxFieldDown: string;
    private readonly birthDayDropdown: string;
    private readonly birthMonthDropdown: string;
    private readonly birthYearDropdown: string;
    private readonly maleToggleButton: string;
    private readonly femaleToggleButton: string;
    private readonly nextButton: string;
    private readonly cancelButton: string;

    constructor(page: Page) {
        super(page);
        this.firstNameField = "//body/div[@id='app']/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]";
        this.zipField = "//body/div[@id='app']/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]";
        this.cityField = "//body/div[@id='app']/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/input[1]";
        this.surnameField = "//body/div[@id='app']/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/input[1]";
        this.streetField = "//body/div[@id='app']/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/input[1]";
        this.titleDropdown = "//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]";
        this.titleMaleOption = "//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]";
        this.titleFemaleOption = "//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]";
        this.numberField = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]';
        this.numberFieldUp = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/button[1]/span[1]';
        this.ageSlider = '.slider__handle';
        this.countryDropdown = '.country-dropdown__selected-country-name';
        this.countryAXOption = '.flag-ax';
        this.boxField = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]';
        this.boxFieldUp = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/button[1]/span[1]';
        this.boxFieldDown = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/button[2]/span[1]';
        this.birthDayDropdown = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]';
        this.birthMonthDropdown = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]';
        this.birthYearDropdown = '//body[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]';
        this.maleToggleButton = '.toggle-button--left';
        this.femaleToggleButton = '.toggle-button--right';
        this.nextButton = ':nth-child(1) > .button--white';
        this.cancelButton = ':nth-child(2) > .button--green';

    }

    async completePage3(page: any, firstname: string, zip: string, city: string, surname: string, street: string, title: string, countryCode: string, birthDay: string, birthMonth: string, birthYear: string) {
        await page.locator(this.firstNameField).fill(firstname);
        await page.locator(this.zipField).fill(zip);
        await page.locator(this.cityField).fill(city);
        await page.locator(this.surnameField).fill(surname);
        await page.locator(this.streetField).fill(street);
        await page.locator(this.titleDropdown).click();
        await page.getByText(title, { exact: true }).click();
        await page.locator(this.countryDropdown).click();
        await page.locator(this.countryPicker(countryCode)).click();
        await page.locator(this.boxFieldUp).click();
        await page.locator(this.numberFieldUp).click();
        await page.locator(this.birthDayDropdown).click();
        await page.getByText(birthDay, { exact: true }).click();
        await page.locator(this.birthMonthDropdown).click();
        await page.getByText(birthMonth, { exact: true }).click();
        await page.locator(this.birthYearDropdown).click();
        await page.getByText(birthYear, { exact: true }).click();
        await page.locator(this.nextButton).click();

        // need to find a way to move slider

    }

    countryPicker(countryCode: string) {
        return `.flag-${countryCode}`;
    }
}