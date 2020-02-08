import 'babel-polyfill';
import {chromium} from 'playwright';
import dotenv from 'dotenv';
import {assert} from 'chai';

import loginUtil from '../loginUtil';
dotenv.config();

describe('#Login Test', () => {
  let page;
  before(async () => {
    console.log(`before start`);
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    page = await context.newPage(`${process.env.GITHUB}`);
    return page;
  });

  it('login failed', async () => {
    const result = await loginUtil.login(page, `${process.env.ID}`, `${process.env.PW}`);
    const currentUrl = await result.url();
    console.log(currentUrl)
    assert.equal(currentUrl, 'https://github.com/login');
  });

  after(async () => {
    console.log(`after part`);
    page.close();
  });
});
