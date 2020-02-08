import dotenv from 'dotenv';
dotenv.config();

const login = async (page, id, pw) => {
  try {
    await page.click('header div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button');
    await page.click('header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.no-underline.mr-3');
    await page.type('#login_field', id);
    await page.type('#password', pw);
    await page.click('#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block');
    const loginUrl = page.url();
    const loginValid = await checkLoginValid(loginUrl);
    if (loginValid) {
      return page;
    } else {
      // throw new Error('로그인에 실패했습니다');
      return page.goto(loginUrl);
    }
  } catch (error) {
    console.log(error);
  }
};

const checkLoginValid = async (url) => {
  if (url === process.env.GITHUB) {
    return true;
  }
  return false;
};

module.exports = {
  login,
};
