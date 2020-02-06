import {chromium} from 'playwright';
import dotenv from 'dotenv';

dotenv.config();

const openBrowser = async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage(`${process.env.GITHUB}`);
  await login(page, `${process.env.ID}`, `${process.env.PW}`);
  await page.screenshot({path: `screenshot.png`});
  await browser.close();
};

const login = async (page ,id, pw) => {
  try {
    await page.click('body > div.position-relative.js-header-wrapper > header > div > div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button');
    await page.click('body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3');
    await page.evaluate((id, pw) => {
      document.querySelector('#login_field').value = id;
      document.querySelector('#password').value = pw;
    }, id, pw).then(() => page.click('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block'));
    await page.screenshot({path: `login.png`});
    return page;
  } catch (error) {
    console.log(error);
  }
}

openBrowser();
