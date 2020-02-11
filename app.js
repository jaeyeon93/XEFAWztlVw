import {chromium} from 'playwright';
import dotenv from 'dotenv';
import loginUtil from './loginUtil';
import searchUtil from './searchUtil';
import logging from './logging';
import addUtil from './addUtil';

dotenv.config();

const app = async () => {
  const page = await openBrowser();
  try {
    const loginResult = await loginUtil.login(page, `${process.env.ID}`, `${process.env.PW}`);
    const helpmeRepoPage = await searchUtil.searchRepo(loginResult, `${process.env.REPO}`);
    const issuePage = await addUtil.addIssueOnRepo(helpmeRepoPage, 'chromium');
    await issuePage.wait(1000);
    await issuePage.close();
  } catch (error) {
    await logging.captureError(error);
  } finally {
    await page.close();
  }
};

const openBrowser = async () => {
  try {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.defaultContext();
    const page = await context.newPage(`${process.env.GITHUB}`);
    return page;
  } catch (error) {
    return await logging.captureError(error);
  }
};

app();
