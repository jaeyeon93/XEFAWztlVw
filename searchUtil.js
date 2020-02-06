const searchRepo = async (page, repoName) => {
  page.screenshot({path:'search.png'});
  try {
    await page.evaluate((repoName) => {
      console.log(`전달받은 repo ${repoName}`);
      document.querySelector('  await login.login(page, `${process.env.ID}`, `${process.env.PW}`);\n').value = repoName;
    }, repoName).then(() => console.log(`search 성공`));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  searchRepo
};
