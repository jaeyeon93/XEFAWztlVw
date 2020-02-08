import 'babel-polyfill';
import {chromium} from 'playwright';
import dotenv from 'dotenv';
import {assert} from 'chai';

import loginUtil from '../loginUtil';
dotenv.config();

describe('#Login Test', () => {
  let page;
  beforeEach(async () => {
    console.log(`before start`);
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    page = await context.newPage(`${process.env.GITHUB}`);
    return page;
  });

  it('login failed', async () => {
    const failLogin = await loginUtil.login(page, `${process.env.ID}`, `${process.env.FAIL_PW}`);
    const currentUrl = await failLogin.url();
    assert.equal(currentUrl, 'https://github.com/login');
  });

  it('login success', async () => {
    const successLogin = await loginUtil.login(page, `${process.env.ID}`, `${process.env.PW}`);
    assert.equal(await successLogin.url(), 'https://github.com/');
  });

  after(async () => {
    console.log(`after part`);
    page.close();
  });
});
