const express = require('express');
const APIController = require('./api/Controllers/APIController');
const APIMiddleware = require('./api/Middlewares/APIMiddleware');

const Routes = express.Router();

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