const axios = require('axios');
const { logger } = require('../../utils/logger');

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
      const followersPerPage = 30;
      const pages = Math.round(followersNumber/followersPerPage);

      const followersArray = [];
      const followers = [];

      for (let i = 1; i <= pages; i++) {
        const followersByPage = await axios.get(`https://api.github.com/users/${user}/followers?page=${i}`);

        followersArray.push(followersByPage.data);
      }

      for (let data of followers) {
        followers.push(data);
      }
      
      return res.status(200).json(followers);
    } catch (e) {
      logger.error(`APIController - getApi Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  }
}
  