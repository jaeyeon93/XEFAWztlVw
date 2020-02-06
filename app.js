import {chromium} from 'playwright';

const openBrowser = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage('https://www.github.com/');
  await login(page);
  console.log(`login function closed`);
  // await page.screenshot({path: `screenshot.png`});
  await browser.close();
};

const login = async (page) => {
  try {
    await page.click('body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3');
    await page.screenshot({path: `loginbutton.png`});
    return 0;
  } catch (error) {
    console.log(error);
  }

}

openBrowser();
