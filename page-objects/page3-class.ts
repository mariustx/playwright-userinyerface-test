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
    private readonly numberFieldDown: string;
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
        this.firstNameField = ".personal-details__tr-row:first-of-type .personal-details__td-cell:nth-of-type(1) input";
        this.zipField = ".personal-details__tr-row:first-of-type .personal-details__td-cell:nth-of-type(2) input";
        this.cityField = ".personal-details__tr-row:nth-of-type(2) .personal-details__td-cell:nth-of-type(2) input";
        this.surnameField = ".personal-details__tr-row:nth-of-type(3) .personal-details__td-cell:nth-of-type(1) input";
        this.streetField = ".personal-details__tr-row:nth-of-type(4) .personal-details__td-cell:nth-of-type(1) input";
        this.titleDropdown = ".personal-details__tr-row:nth-of-type(2) .personal-details__td-cell:nth-of-type(1) ";
        this.titleMaleOption = ".personal-details__tr-row:nth-of-type(2) .personal-details__td-cell:nth-of-type(1) .dropdown__list-item:nth-of-type(1)";
        this.titleFemaleOption = ".personal-details__tr-row:nth-of-type(2) .personal-details__td-cell:nth-of-type(1) .dropdown__list-item:nth-of-type(2)";
        this.numberField = '.personal-details__tr-row:nth-of-type(5) .personal-details__td-cell:nth-of-type(1) ';
        this.numberFieldUp = '.personal-details__tr-row:nth-of-type(5) .personal-details__td-cell:nth-of-type(1) .icon-chevron-up';
        this.numberFieldDown = '.personal-details__tr-row:nth-of-type(5) .personal-details__td-cell:nth-of-type(1) .icon-chevron-down';
        this.ageSlider = '.slider__handle';
        this.countryDropdown = '.country-dropdown__selected-country-name';
        this.countryAXOption = '.flag-ax';
        this.boxField = '.personal-details__tr-row:nth-of-type(4) .personal-details__td-cell:nth-of-type(2)';
        this.boxFieldUp = '.personal-details__tr-row:nth-of-type(4) .personal-details__td-cell:nth-of-type(2) .icon-chevron-up';
        this.boxFieldDown = '.personal-details__tr-row:nth-of-type(4) .personal-details__td-cell:nth-of-type(2) .icon-chevron-down';
        this.birthDayDropdown = '.date-dropdown__container--day .icon-chevron-down';
        this.birthMonthDropdown = '.date-dropdown__container--month .icon-chevron-down';
        this.birthYearDropdown = '.date-dropdown__container--year .icon-chevron-down';
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

    async moveSlider(page: any): Promise<void> {
        const sliderTrack = await page.locator('.slider__handle').first();
        const handlePosition = await sliderTrack.evaluate(el => {
            return {
                x: el.getBoundingClientRect().x,
                y: el.getBoundingClientRect().y
            };
        });
    
        console.log(handlePosition);
    
        // Using the hover method to place the mouse cursor, then moving it to the right
        await sliderTrack.hover({ force: true, position: handlePosition });
        await page.mouse.down();
        await sliderTrack.hover({ force: true, position: { x: handlePosition.x + 30, y: handlePosition.y } });
        await page.mouse.up();
    }
    

}