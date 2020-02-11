import logging from './logging';

const searchRepo = async (page, repoName) => {
  try {
    await page.click('body > div.position-relative.js-header-wrapper > header > div:nth-child(2) > button');
    await page.type('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus', repoName);
    const searchResultPage = await searchRepoAllGithub(page);
    return selectRepoOnResultPage(searchResultPage);
  } catch (err) {
    return await logging.captureError(error);
  }
};

const searchRepoAllGithub = async (page) => {
  try {
    await page.click('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus');
    await page.click('#jump-to-suggestion-search-global > a > div.jump-to-suggestion-name.js-jump-to-suggestion-name.flex-auto.overflow-hidden.text-left.no-wrap.css-truncate.css-truncate-target');
    return page;
  } catch (err) {
    return await logging.captureError(error);
  }
};

const selectRepoOnResultPage = async (resultPage) => {
  try {
    await resultPage.click('#js-pjax-container > div > div.col-12.col-md-9.float-left.px-2.pt-3.pt-md-0.codesearch-results > div > ul > li > div.mt-n1 > div.f4.text-normal > a');
    return resultPage;
  } catch (err) {
    return await logging.captureError(error);
  }
};

module.exports = {
  searchRepo,
};
