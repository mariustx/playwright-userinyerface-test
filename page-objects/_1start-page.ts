const logoIcon = '.logo__icon';
const firstParagraph = '.start__paragraph:nth-child(1)';
const secondParagraph = '.start__paragraph:nth-child(2)';
const startButton = '.start__button';
const startLink = '.start__link';

export async function completeStartPage(page: any) {
    await page.locator(startLink).click();
}
