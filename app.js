import {chromium} from 'playwright';
import dotenv from 'dotenv';
import loginUtil from './loginUtil';
import searchUtil from './searchUtil';
import * as Sentry from '@sentry/node';
Sentry.init({dsn: `${process.env.SENTRY_DSN}`});
dotenv.config();

const app = async () => {
  try {
    const page = await openBrowser();
    const loginResult = await loginUtil.login(page, `${process.env.ID}`, `${process.env.PW}`);
    await searchUtil.searchRepo(loginResult, `${process.env.REPO}`);
  } catch (error) {
    Sentry.captureException(err);
    Sentry.flush(2000);
    return err;
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
    Sentry.captureException(err);
    Sentry.flush(2000);
    return err;
  }
};

app();
