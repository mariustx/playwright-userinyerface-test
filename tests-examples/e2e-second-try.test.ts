import { test } from '@playwright/test';
import { completeStartPage } from '../ignore/page-objects-start/_1start-page';
import { completePage1 } from '../ignore/page-objects-start/_2page1';
import { completePage2 } from '../ignore/page-objects-start/_3page2';
import { completePage3 } from '../ignore/page-objects-start/_4page3';
import { completePage4 } from '../ignore/page-objects-start/_5page4';
import { validatePage5 } from '../ignore/page-objects-start/_6page5';

test.beforeEach('Open the start page', async ({ page }) => {
  await page.goto('/');
});

test('e2e', async ({ page }) => {

  await completeStartPage(page);
  await completePage1(page, 'Passwords1', 'youema', 'omain');
  await completePage2(page, 'ponies', 'polo', 'balls');
  await completePage3(page, 'firstname', 'zip', 'city', 'surname', 'street');
  await completePage4(page);
  await validatePage5(page);

});

test.afterEach('Close the browser', async ({ context }) => {
  await context.close();
});
