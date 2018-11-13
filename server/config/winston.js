const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger({
   format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
  transports: [
     new (winston.transports.Console)({
      json: true,
      colorize: true
    })
     ]
});

module.exports = logger;

