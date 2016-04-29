const Messenger = require('./messenger');
const TelegramBot = require('node-telegram-bot-api')
const Message = require('../models/message');


module.exports = class TelegramMessenger extends Messenger {
  setup(options) {
    this.bot = new TelegramBot(options.token, { polling: true });
    this.bot.on('text', this.handleText.bind(this));
  }

  handleText(msg) {
    let message = Message.createTextMessage(msg.text);
    this.emit('message', message);
  }

  sendMessage(session, message) {
    // const chatId = session;
    // this.bot.sendMessage()
  }

};