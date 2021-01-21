const express = require('express');
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/api/v1', routes);

app.listen(process.env.PORT || 3000, () => console.log('server is running'));