const express = require('express');
const APIController = require('./app/Controllers/API');
const APIMiddleware = require('./app/Middlewares/API');

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