'use strict';

const Messenger = require('./messengers/messenger');

module.exports = class Bot {

  constructor(options) {
    // Actions
    this.actions = options.actions;
    if (!this.actions) {
      throw new Error('Actions argument is required to construct bot.');
    }

    // Parser
    this.parser = options.parser;
    if (!this.parser) {
      throw new Error('Parser argument is required to construct bot.');
    }

  }

  setupActions(actions) {

  }

  setupParser(parser) {

  }

  addMessenger(messenger) {
    if (messenger instanceof Messenger) {
      return messenger.listen(this);
    } else {
      throw new Error('Messenger argument is not an instance of Messenger class.');
    }
  }

  removeMessenger(messager) {
    if (messenger instanceof Messenger) {
      return messenger.unlisten(this);
    } else {
      throw new Error('Messenger argument is not an instance of Messenger class.');
    }
  }

  /**
  See https://wit.ai/docs/http/20160330#converse-link
  */
  converse(sessionId, message) {
    // Get Session from sessionId

    // Extract context for Session

    // Parse the message

    // Perform action from parsed message

  }

}