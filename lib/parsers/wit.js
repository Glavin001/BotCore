'use strict';

const Parser = require('./parser');
const Wit = require('node-wit').Wit;
const Message = require('../models/message');

/**
See https://github.com/wit-ai/node-wit
*/
module.exports = class WitParser extends Parser {

  setup(bot, options) {

    // Get list of actions
    let actionKeys = _.keys(bot.actions);
    // Create actions for Wit
    let actions = {};
    _.each(actionKeys, (actionKey) => {
      //
      let actionFn = bot.actions[actionKey];
      actions[actionKey] = (sessionId, context, cb) => {
        Promise.resolve(actionFn({
            sendMessage: sendMessage,
            context: context
          }))
          .then(() => {
            // Save context
            cb(context);
          })
          .catch((error) => {
            cb(error);
          });
      };
    });

    // Merge action
    actions.merge = (sessionId, context, entities, message, cb) => {
      // TODO:
      cb(context);
    };

    // Say action
    actions.say = (sessionId, context, message, cb) => {
      Promise.resolve(bot.sendMessage(sessionId, Message.createTextMessage(message)))
        .then(() => {
          return cb();
        })
        .catch((error) => {
          return cb(error);
        });
    };

    // Error action
    actions.error = (sessionId, context, error) => {
      console.log(error.message);
    };


  }

  parse({
    sessionId,
    context,
    message
  }) {
    return new Promise((resolve, reject) => {

      let text = message.text;
      client.runActions(sessionId, text, context, (e, finalContext) => {
        if (e) {
          console.log('Oops! Got an error: ' + e);
          return;
        }
        console.log('The session state is now: ' + JSON.stringify(finalContext));
        resolve(finalContext);

      });

    });

  }

};