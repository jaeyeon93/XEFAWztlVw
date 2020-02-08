const findIssueTab = async (page) => {
  try {
    await page.click('#js-repo-pjax-container > div.pagehead.repohead.readability-menu.bg-gray-light.pb-0.pt-3.pb-0 > nav > span:nth-child(2) > a');
    return page;
  } catch (error) {
    console.log(error);
  }
};

const addNewIssue = async (page, title, comment) => {
  try {
    await page.click('#js-repo-pjax-container > div.container-lg.clearfix.new-discussion-timeline.p-responsive > div > div > div.d-flex.flex-justify-between.mb-md-3.flex-column-reverse.flex-md-row.flex-items-end > div.ml-3.d-flex.flex-justify-between.width-full.width-md-auto > a');
    await page.waitForSelector('#issue_title');
    await page.type('#issue_title', title);
    await page.type('#issue_body', comment, {delay: 10});
    await page.click('#new_issue > div > div.col-md-9.col-sm-12 > div > div.timeline-comment > div.flex-items-center.flex-justify-end.mx-2.mb-2.px-0.d-none.d-md-flex > button.btn.btn-primary');
    return page;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findIssueTab,
  addNewIssue,
};
