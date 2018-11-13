const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger({
   format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
  transports: [
     logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  ]
});

module.exports = logger;

