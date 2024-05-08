const logoIcon = '.logo__icon';
const firstParagraph = '.start__paragraph:nth-child(1)';
const secondParagraph = '.start__paragraph:nth-child(2)';
const startButton = '.start__button';
const sendToBotButton = '.help-form__send-to-bottom-button';

export async function clickSendToBotButton(page: any) {
    await page.locator(sendToBotButton).click();
}
