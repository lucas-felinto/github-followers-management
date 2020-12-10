const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
  ),
  transports: [
    new transports.Console({
      level: 'debug'
    }),
    new transports.File({
      filename: `${__dirname}/../logs/errors-api.log`,
      level: 'error' 
    }),
    new transports.File({
      level: 'info',
      filename: `${__dirname}/../logs/info-api.log` 
    }),
  ],
});