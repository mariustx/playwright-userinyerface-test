import { test } from '@playwright/test';
import { Start } from '../page-classes/start-class';
import { openStartPage } from '../utilities/setup';
import { closeBrowser } from '../utilities/teardown';
import { Page1 } from '../page-classes/page1-class';
import { Page2 } from '../page-classes/page2-class';
import { Page3 } from '../page-classes/page3-class';
import { Page4 } from '../page-classes/page4-class';
import { Page5 } from '../page-classes/page5-class';

openStartPage;

test('e2e-class', async ({ page }) => {

  const startPage = new Start(page);
  const page1 = new Page1(page);
  const page2 = new Page2(page);
  const page3 = new Page3(page);
  const page4 = new Page4(page);
  const finalPage = new Page5(page);

  await startPage.completeStartPage();
  await page1.checkIfGameIsStarted();
  await page1.completePage1(page, 'Passwords1', 'youema', 'omain');
  await page2.completePage2(page, 'ponies', 'polo', 'balls');
  await page3.completePage3(page, 'firstname', 'zip', 'city', 'surname', 'street');
  await page4.completePage4(page);
  await finalPage.validatePage5(page);

});

closeBrowser;