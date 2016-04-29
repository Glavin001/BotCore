'use strict'

/**
 * Messenger
 */
module.exports = class Messenger extends EventEmitter {
  constructor(options) {
    super(options);
    this.setup(options);
  }

  listen(bot) {
    this.on('message', bot.converse.bind(bot));
    return Promise.resolve(this);
  }

  unlisten(bot) {
    this.removeListener('message', bot.converse.bind(bot));
    return Promise.resolve(this);
  }

  /** Customization in subclass
  */
  setup() {
    console.error(new Error('Messenger subclass must implement `setup` function.'));
  }

  sendMessage(session, message) {
    console.error(new Error('Messenger subclass must implement `sendMessage` function.'));
  }

};
