// const {Bot, Parsers, Messengers} = require('botcore');
const {
  Bot,
  Parsers,
  Messengers
} = require('../../lib/');

// Create Parser
const parser = new Parsers.Wit({
  token: process.env.WIT_TOKEN
});

// Create actions
const actions = {
  'fetch-weather': ({context}) => {
    return new Promise((resolve, reject) => {
      context.forecast = 'sunny';
      // say("Hey!");
      return Promise.resolve();
    });
  }
}

// Create Bot
const bot = new Bot({
  //  messengers: [facebookMessenger, slackMessenger, telegramMessenger],
  parser: parser,
  actions: actions
});


// Create Messenger for Slack
// const facebookMessenger = new Messengers.Facebook({
//   access_token: process.env.FACEBOOK_ACCESS_TOKEN,
//   verify_token: process.env.FACEBOOK_VERIFY_TOKEN
// });
const slackMessenger = new Messengers.Slack({
  token: process.env.SLACK_TOKEN
});
// const telegramMessenger = new Messengers.Telegram({
//   token: process.env.TELEGRAM_TOKEN
// });

// ===== Dynamically add Messengers =====
// Add Messengers
bot.addMessenger(slackMessenger);

// Start bot
bot.listen(function() {
  console.log('Bot is listening!');
});