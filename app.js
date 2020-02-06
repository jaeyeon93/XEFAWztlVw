import {chromium} from 'playwright';
import dotenv from 'dotenv';
import login from './loginUtil';

dotenv.config();

const openBrowser = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage(`${process.env.GITHUB}`);
  await login.login(page, `${process.env.ID}`, `${process.env.PW}`);
  // await browser.close();
};

openBrowser();
