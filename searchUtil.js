const searchRepo = async (page, repoName) => {
  console.log(`search Repo called, repo name is ${repoName}`);
  try {
    await page.evaluate((repoName) => {
      console.log(`전달받은 repo ${repoName}`);
      document.querySelector('  await login.login(page, `${process.env.ID}`, `${process.env.PW}`);\n').value = repoName;
    }, repoName)
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  searchRepo
};
