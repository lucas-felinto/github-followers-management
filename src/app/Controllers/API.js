const axios = require('axios');
const Log = require('../../utils/logger');

module.exports = {
  async getApi(req, res) {
    try {
      const user = req.query.user;

      if (!user) {
        return res.status(400).json('User is required');
      }

      const gitHubApi = `https://api.github.com/users/${user}`;
      const userApi = await axios.get(gitHubApi);

      if (userApi.status === 403) {
        return res.status(403).json('You have reached the request limit');
      }

      if (!userApi) {
        return res.status(404).json('User not found');
      }

      let params = {
        usersNumber: userApi.data.followers,
        usersPerPage: 100,
        user: user,
        usersStatus: 'followers'
      }

      const followers = await this.getUsers(params);

      params = {
        usersNumber: userApi.data.following,
        usersPerPage: 100,
        user: user,
        usersStatus: 'following'
      }

      const following = this.getUsers(params);

      // if (followers.length > 1) {
      //   for (let array of followers) {
      //     // novo for verificando com quem está seguindo quem te segue ou não ou um filter
      //     console.log(array)
      //   }
      // } else {
      //   // fazer um for apenas verificando com quem está seguindo
      //   followers.push(followersArray[0]);
      // }

      return res.status(200).json(following);
    } catch (e) {
      console.log(e)
      Log.error(`APIController - getApi Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  },

  async getUsers(params) {
    try {
      console.log(params)
      const users = [];
      const pages = Math.round(params.usersNumber/params.usersPerPage);

      for (let i = 1; i <= pages; i++) {
        const followersByPage = await axios.get(`https://api.github.com/users/${params.user}/${params.usersStatus}?per_page=${params.usersPerPage}&page=${i}`);

        users.push(followersByPage.data);
      }

      return users;  
    } catch (e) {
      console.log(e)
      Log.error(`APIController - getUsers Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  }
}
  