import dotenv from 'dotenv';
import * as Sentry from '@sentry/node';
dotenv.config();

Sentry.init({dsn: `${process.env.SENTRY_DSN}`})
const loginUtil = async (page, id, pw) => {
  try {
    await page.click('header div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button');
    await page.click('header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3');
    await page.evaluate((id, pw) => {
      document.querySelector('#login_field').value = id;
      document.querySelector('#password').value = pw;
    }, id, pw).then(() => page.click('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block'));

    const loginValid = await checkLoginValid(page.url());
    if (loginValid) {
      return page;
    } else {
      throw new Error(`loginValid에서 발생한 에러`);
    }
  } catch (error) {
    Sentry.captureException(error);
    await Sentry.flush(2000);
    return error;
  }
};

const checkLoginValid = async (url) => {
  if (url === process.env.GITHUB) {
    return true;
  }
  return false;
};

module.exports = {
  login: loginUtil,
};
