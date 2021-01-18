const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const routesFiles = ['./src/routes.js']

swaggerAutogen(outputFile, routesFiles)