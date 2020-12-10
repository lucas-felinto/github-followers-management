const axios = require('axios');
const log = require('../../utils/logger');

module.exports = {
  async getApi(req, res) {
    try {
      const user = req.query.user;

      if (!user) {
        return res.status(400).json('User is required');
      }

      const gitHubApi = `https://api.github.com/users/${user}`;
      const userApi = await axios.get(gitHubApi);

      if (!userApi) {
        return res.status(404).json('User not found');
      }

      const followersNumber = userApi.data.followers;
      const followersPerPage = 100;
      const pages = Math.round(followersNumber/followersPerPage);

      const followersArray = [];

      for (let i = 1; i <= pages; i++) {
        const followersByPage = await axios.get(`https://api.github.com/users/${user}/followers?per_page=${followersPerPage}&page=${i}`);

        followersArray.push(followersByPage.data);
      }

      return res.status(200).json(followersArray);
    } catch (e) {
      log.error(`APIController - getApi Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  }
}
  