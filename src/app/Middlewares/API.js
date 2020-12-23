const axios = require('axios');
const Log = require('../../utils/logger');

module.exports = {
  async getApi(req, res, next) {
    try {
      const user = req.query.user;
      const apiData = {};

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
          Log.error(`APIMiddleware - getUsers Function - ${e.message}`);
          return json('Cannot get users:', e.message);
        }
      }

      let params = {
        usersNumber: userApi.data.followers,
        usersPerPage: 100,
        user: user,
        usersStatus: 'followers'
      }

      apiData.followers = await getUsers(params);
      
      params = {
        usersNumber: userApi.data.following,
        usersPerPage: 100,
        user: user,
        usersStatus: 'following'
      }

      apiData.following = await getUsers(params);

      req.apiData = apiData;

      next();
    } catch (e) {
      Log.error(`APIMiddleware - getApi Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  }
}