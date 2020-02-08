const findIssueTab = async (page) => {
  console.log(`findIssueTab method called current URL : ${page.url()}`);
  await page.click('#js-repo-pjax-container > div.pagehead.repohead.readability-menu.bg-gray-light.pb-0.pt-3.pb-0 > nav > span:nth-child(2) > a');
  return page;
};

const addNewIssue = async (page, title, comment) => {
  await page.click('#js-repo-pjax-container > div.container-lg.clearfix.new-discussion-timeline.p-responsive > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.ml-3.d-flex.flex-justify-between.width-full.width-md-auto > a');
  await page.evaluate((title, comment) => {
    document.querySelector('#issue_title').value = title;
    document.querySelector('#issue_body').value = comment;
  }, title, comment);
  await page.click('#new_issue > div > div.col-md-9.col-sm-12 > div > div.timeline-comment > div.flex-items-center.flex-justify-end.mx-2.mb-2.px-0.d-none.d-md-flex > button.btn.btn-primary');
  return page;
};

module.exports = {
  findIssueTab,
  addNewIssue,
};
