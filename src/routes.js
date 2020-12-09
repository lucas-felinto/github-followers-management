const express = require('express');
const APIController = require('./app/Controllers/API')

const Routes = express.Router();

Routes.get('/get-api', APIController.getApi);

module.exports = Routes;