const express = require('express');
const routes = require('./routes')
const server = express();

server.use(routes);

server.listen(3000, () => {
  console.log('server is running');
});