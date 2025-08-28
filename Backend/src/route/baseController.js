const asyncWrapper = require('../util/async-wrapper');

class BaseController {
  constructor() {
    this.asyncWrapper = asyncWrapper;
  }
}

module.exports = BaseController;