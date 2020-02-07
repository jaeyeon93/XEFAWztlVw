// const searchRepo = async (page, repoName) => {
//   try {
//     await page.click('body > div.position-relative.js-header-wrapper > header > div:nth-child(2) > button');
//     await page.evaluate((repo) => {
//       console.log(`전달받은 repo ${repo}`);
//       document.querySelector('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus').value = repo;
//     }, repoName).then(async () => await page.click('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus'))
//   } catch (err) {
//     console.log(err);
//   }
// };

const searchRepo = async (page, repoName) => {
  try {
    await page.click('body > div.position-relative.js-header-wrapper > header > div:nth-child(2) > button');
    await page.evaluate((repo) => {
      console.log(`전달받은 repo ${repo}`);
      document.querySelector('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus').value = repo;
    }, repoName);
    searchAllGithub(page);
  } catch (err) {
    console.log(err);
  }
};

const searchAllGithub = async (page) => {
  try {
    await page.click('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > div > div > form > label > input.form-control.input-sm.header-search-input.jump-to-field.js-jump-to-field.js-site-search-focus');
    await page.click('#jump-to-suggestion-search-global > a > div.jump-to-suggestion-name.js-jump-to-suggestion-name.flex-auto.overflow-hidden.text-left.no-wrap.css-truncate.css-truncate-target');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  searchRepo
};
