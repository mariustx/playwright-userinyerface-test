import test from "@playwright/test";

export const closeBrowser = test.afterEach('Close the browser',
    async ({ context }) => {
        await context.close();
    });
