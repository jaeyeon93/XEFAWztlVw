import dotenv from 'dotenv';
import logging from './logging';
dotenv.config();

const login = async (page, id, pw) => {
  try {
    await page.waitForSelector('header div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button').then((page) => page.click());
    await page.waitForSelector('header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3').then((page) => page.click());
    await page.type('#login_field', id);
    await page.type('#password', pw);
    await page.click('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
    const loginUrl = page.url();
    const loginValid = await checkLoginValid(loginUrl);
    if (loginValid) {
      return page;
    } else {
      throw new Error(`Login is Failed`);
    }
  } catch (error) {
    return await logging.captureError(error);
  }
};

const checkLoginValid = (url) => {
  if (url === process.env.GITHUB) {
    return true;
  }
  return false;
};

module.exports = {
  login,
  checkLoginValid,
};
