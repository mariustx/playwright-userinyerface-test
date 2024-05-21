import { test } from '@playwright/test';
import { Start } from '../page-objects/start-class';
import { openStartPage } from '../utilities/setup';
import { closeBrowser } from '../utilities/teardown';
import { Page1 } from '../page-objects/page1-class';
import { Page2 } from '../page-objects/page2-class';
import { Page3 } from '../page-objects/page3-class';
import { Page4 } from '../page-objects/page4-class';
import { Page5 } from '../page-objects/page5-class';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'e2e-test-data.csv')), {
  columns: true,
  relax_quotes: true,
  skip_empty_lines: true
});

openStartPage;

for (const record of records) {
  test(`e2e-class: ${record.test_case}`, async ({ page }) => {

    await completeEndToEnd(page, record.password, record.email, record.domainName, record.domainLevel, record.interest1, record.interest2, record.interest3, record.firstName, record.zipCode, record.cityName, record.surName, record.streetAddress, record.title, record.countryCode, record.birthDay, record.birthMonth, record.birthYear);
    //await completeEndToEnd(page, "Password.is.1", "one-email", "new-domain", "ponies", "polo", "balls", "first-Name", "zip-Code", "city-Name", "sur-Name", "street-Address", "Mrs", "ro", "9", "May", "2024");

  });
}

closeBrowser;

async function completeEndToEnd(page: any, password: string, email: string, domainName: string, domainLevel: string, interest1: string, interest2: string, interest3: string, firstName: string, zipCode: string, cityName: string, surName: string, streetAddress: string, title: string, countryCode: string, birthDay: string, birthMonth: string, birthYear: string) {
  const startPage = new Start(page);
  const page1 = new Page1(page);
  const page2 = new Page2(page);
  const page3 = new Page3(page);
  const page4 = new Page4(page);
  const finalPage = new Page5(page);

  await startPage.completeStartPage();
  await page1.checkIfGameIsStarted();
  await page1.completePage1(page, password, email, domainName, domainLevel);
  await page2.completePage2(page, interest1, interest2, interest3);
  await page3.completePage3(page, firstName, zipCode, cityName, surName, streetAddress, title, countryCode, birthDay, birthMonth, birthYear);
  await page4.completePage4(page);
  await finalPage.validatePage5(page);
}
