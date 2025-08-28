const morgan = require('morgan');
const { gEnv } = require('../util/env');
const logger = require('../util/logger');

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
};

module.exports = morgan(':method :url :status :response-time ms - :res[content-length]', {
  stream: logger.stream,
  skip: () => gEnv('NODE_ENV') === 'test',
});