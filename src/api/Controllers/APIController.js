const Log = require('../../utils/logger');

module.exports = {
  async getUsersNotFollowYouBack(req, res) {
    try {
      const apiData = req.apiData;

      const usersNotFollowYouBack = [];

      for (let followingUser of apiData.following) {
        let FollowYou = apiData.followers.find(user => 
          user.login === followingUser.login
        );

        if (!FollowYou) {
          usersNotFollowYouBack.push(followingUser);
        }
      }

      return res.status(200).json(usersNotFollowYouBack);
    } catch (e) {
      Log.error(`APIController - getUsersNotFollowYouBack Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  },

  async getUsersYouNotFollowBack(req, res) {
    try {
      const apiData = req.apiData;

      const usersYoutNotFollowBack = [];

      for (let followUser of apiData.followers) {
        let FollowYou = apiData.following.find(user => 
          user.login === followUser.login
        );

        if (!FollowYou) {
          usersYoutNotFollowBack.push(followUser);
        }
      }

      return res.status(200).json(usersYoutNotFollowBack);
    } catch (e) {
      Log.error(`APIController - getUsersYouNotFollowBack Endpoint - ${e.message}`);
      return res.status(500).json(e.message);
    }
  }
}
