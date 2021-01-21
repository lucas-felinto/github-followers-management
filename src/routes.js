const express = require('express');
const APIController = require('./api/Controllers/APIController');
const APIMiddleware = require('./api/Middlewares/APIMiddleware');

const Routes = express.Router();

Routes.get('/', (req, res) => {
  const response = `Welcome to GitHub Followers Management API. To discover users you follow but you not follow back use the /not-follow-you?user=your-github-user. To discover users who you follow but not follow you back use /you-not-follow?user=your-github-user. For any questions access: https://github.com/lucas-felinto/github-followers-management or https://github-followers-management.herokuapp.com/api/v1/documentation/`;
  
  return res.status(200).json(response);
})

Routes.get(
  '/not-follow-you', 
  APIMiddleware.getApi, 
  APIController.getUsersNotFollowYouBack
  );

Routes.get(
  '/you-not-follow', 
  APIMiddleware.getApi, 
  APIController.getUsersYouNotFollowBack
  );

module.exports = Routes;
