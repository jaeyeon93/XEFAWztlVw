const searchRepo = async (page, repoName) => {
  page.screenshot({path:'search.png'});
  try {
    await page.evaluate((repo) => {
      console.log(`전달받은 repo ${repo}`);
      document.querySelector('#dashboard-repos-filter-left').value = repo;
    }, repoName).then(() => console.log(`search 성공`));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  searchRepo
};

// #dashboard-repos-filter-left
