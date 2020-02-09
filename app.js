import {chromium} from 'playwright';
import dotenv from 'dotenv';
import loginUtil from './loginUtil';
import searchUtil from './searchUtil';
import logging from './logging';
dotenv.config();

const app = async () => {
  try {
    const page = await openBrowser();
    const loginResult = await loginUtil.login(page, `${process.env.ID}`, `${process.env.PW}`);
    await searchUtil.searchRepo(loginResult, `${process.env.REPO}`);
  } catch (error) {
    return await logging.captureError(error);
  }
};

const openBrowser = async () => {
  try {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage(`${process.env.GITHUB}`);
    return page;
  } catch (error) {
    return await logging.captureError(error);
  }
};

app();
