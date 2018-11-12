const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger({
   format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
if (config.env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;

