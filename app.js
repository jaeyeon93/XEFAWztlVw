import {chromium} from 'playwright';
import dotenv from 'dotenv';
import loginUtil from './loginUtil';
import searchUtil from './searchUtil';
import addUtil from './addUtil';

dotenv.config();

const app = async () => {
  try {
    const page = await openBrowser();
    const loginResult = await loginUtil.login(page, `${process.env.ID}`, `${process.env.PW}`);
    // const helpmeRepoPage = await searchUtil.searchRepo(loginResult, `${process.env.REPO}`);
    // await addUtil.addIssueOnRepo(helpmeRepoPage, 'reactoring');
  } catch (error) {
    console.log(error);
    page.close();
  }
};
const openBrowser = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage(`${process.env.GITHUB}`);
  return page;
};

app();
