const axios = require('axios');
const gitHubApi = 'https://api.github.com/users/lucas-felinto';

module.exports = {
  async getApi(req, res) {
    try {
      const userApi = await axios.get(gitHubApi);
      const followersNumber = userApi.data.followers;
      const pages = Math.round(followersNumber/30);

      const followers = [];

      for (let i = 1; i <= pages; i++) {
        const followersByPage = await axios.get(`https://api.github.com/users/lucas-felinto/followers?page=${i}`);


        followers.push(followersByPage.data);
      }

      return res.json(followers[0]);
    } catch (e) {
      console.log(e)
      return res.json(e.message);
    }
  }
}
  