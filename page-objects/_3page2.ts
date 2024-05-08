const downloadButton = ':nth-child(3) > .button';
const uploadButton = '.avatar-and-interests__upload-button';
const nextButton = ':nth-child(1) > .button--white';
const poniesCheckbox = '[for="interest_ponies"]';
const poloCheckbox = '[for="interest_polo"]';
const doughCheckbox = '[for="interest_dough"]';
const selectallCheckbox = '[for="interest_selectall"]';
const unselectallCheckbox = '[for="interest_unselectall"]';

export async function completePage2(page: any, interest1: string, interest2: string, interest3: string) {

    await downloadImageAndSave(page);

    await uploadImageViaFileChooser(page);

    const checkboxes = ['unselectall', interest1, interest2, interest3];
    for (const interest of checkboxes) {
        await page.locator(createCheckboxSelector(interest)).click();
    }

    await page.locator(nextButton).click();

}

async function uploadImageViaFileChooser(page: any) {
    let [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator(uploadButton).click(),
    ]);
    await fileChooser.setFiles(["download\\avatar.png"]);
}

async function downloadImageAndSave(page: any) {
    const downloadPromise = page.waitForEvent('download');
    await page.locator(downloadButton).click();
    const download = await downloadPromise;
    await download.saveAs('download/' + download.suggestedFilename());
}

function createCheckboxSelector(interest: string) {
    return `[for="interest_${interest}"]`;
}