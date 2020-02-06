import {chromium} from 'playwright';

const openBrowser = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage('https://www.google.com/');

  await page.screenshot({path: `2.png`});
  await browser.close();
};

openBrowser();
