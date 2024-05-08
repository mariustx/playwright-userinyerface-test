import { clickSendToBotButton } from "./_7popups";

const passwordField = '.login-form__field-row > input';
const emailField = ':nth-child(1) > .input';
const domainField = ':nth-child(3) > .input';
const domainLevelDropDown = '.dropdown__field';
const domainLevelOption1 = '.dropdown__list > :nth-child(2)';
const domainLevelOption2 = '.dropdown__list > :nth-child(3)';
const termsConditionsCheckbox = '.checkbox__box';
const nextButton = ':nth-child(1) > .button--secondary';

export async function completePage1(page: any, password: string, email: string, domain: string) {
    clickSendToBotButton(page);
    await page.locator(passwordField).fill(password);
    await page.locator(emailField).fill(email);
    await page.locator(domainField).fill(domain);
    await page.locator(domainLevelDropDown).click();
    await page.locator(domainLevelOption1).click();
    await page.locator(termsConditionsCheckbox).click();
    await page.locator(nextButton).click();
}
