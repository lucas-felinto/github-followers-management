const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'github-followers-management' },
  transports: [
    new transports.File({ filename: 'errors.log', level: 'error' }),
    new transports.File({ filename: 'quick-start-combined.log' })
  ]
});

module.exports = logger;