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

      const getUsers = async function(params) {
        try {
          const pages = Math.round(params.usersNumber/params.usersPerPage);
          const users = [];
    
          for (let i = 1; i <= pages; i++) {
            const followersByPage = await axios.get(`https://api.github.com/users/${params.user}/${params.usersStatus}?per_page=${params.usersPerPage}&page=${i}`);
    
            users.push(followersByPage.data);
          }
          
          return users;  
        } catch (e) {
          Log.error(`APIController - getUsers Function - ${e.message}`);
          return json('Cannot get users:', e.message);
        }
      }

      let params = {
        usersNumber: userApi.data.followers,
        usersPerPage: 100,
        user: user,
        usersStatus: 'followers'
      }

      const followers = await getUsers(params);

      params = {
        usersNumber: userApi.data.following,
        usersPerPage: 100,
        user: user,
        usersStatus: 'following'
      }

      const following = await getUsers(params);

      

      const usersNotFollowYouBack = [];

      for (let followingUser of following[0]) {
        let FollowYou = followers[0].find(user => 
          user.login === followingUser.login
        );

        if (!FollowYou) {
          usersNotFollowYouBack.push(followingUser);
        }
      }

      return res.status(200).json(usersNotFollowYouBack);
    } catch (e) {
      console.log(e)
      Log.error(`APIController - getApi Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  }
}
