'use strict';

module.exports = class Parser {
  /**

  */
  constructor(bot, options) {
    this.setup(bot, options);
  }

  setup(options) {
    // Default
  }

  /**

  */
  parse({sessionId, context, message}) {
    throw new Error('Parser subclass must implement `parse` function.');
  }

};

