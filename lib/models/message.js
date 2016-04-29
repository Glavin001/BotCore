'use strict'

class Message {

  constructor(data) {
    this.conversation = data.conversation;
    this.type = data.type;
    this.text = data.text;
    this.list = data.list;
    this.attachments = data.attachments;
  }

  static createTextMessage(text) {
    return new Message({
      text: text
    });
  }

}

module.exports = Message
