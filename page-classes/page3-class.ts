import { Page } from "@playwright/test";
import { Forms } from "./forms-class";

export class Page3 extends Forms {
    private readonly passwordField: string;
    private readonly emailField: string;

    constructor(page: Page) {
        super(page);
        this.passwordField = '.login-form__field-row > input';
        this.emailField = ':nth-child(1) > .input';

    }

    async completePage3(page: any, firstname: string, zip: string, city: string, surname: string, street: string) {
        await page.getByPlaceholder('Placeholder...').first().fill('firstname');
        await page.getByPlaceholder('Placeholder...').nth(1).fill('zip');
        await page.getByPlaceholder('Placeholder...').nth(2).fill('city');
        await page.getByPlaceholder('Placeholder...').nth(3).fill('surname');
        await page.getByPlaceholder('Placeholder...').last().fill('street');
        await page.locator('.dropdown__opener').first().click();
        await page.getByText('Mrs').click();
        await page.locator('.date-dropdown__container > .dropdown > .dropdown__header > .dropdown__opener').first().click();
        await page.getByText('1', { exact: true }).nth(3).click();
        await page.getByText('Month').click();
        await page.getByText('April').click();
        await page.locator('div:nth-child(3) > .dropdown > .dropdown__header > .dropdown__opener > .icon').click();
        await page.getByText('2024').click();

        await page.locator('div').filter({ hasText: /^Choose a country$/ }).nth(3).click();
        await page.locator('.flag').first().click();

        /*
      const slider = await page.locator('.slider__handle');
      await slider.click({delay: 5000});
      await page.mouse.move(10, 0);*/


        await page.getByRole('button', { name: 'Next' }).click();
    }

}