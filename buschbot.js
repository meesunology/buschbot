var Botkit;
var controller;
var bot;
var refer;

var auth = require('./reference/auth.js');

function Initialize(){
    Botkit = require('./botkit/lib/Botkit.js');
    controller = Botkit.slackbot({});
    bot = controller.spawn({
        token: auth.slackbot
    }).startRTM();

    controller.hears(['opening arc', 'open arc'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'sun_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Open the ARC Lab, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/shift-duties-and-how-to-s/how-to-open-close-arc#TOC-Opening-ARC');
    });

    controller.hears(['closing arc', 'close arc'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'new_moon_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Close the ARC Lab, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/shift-duties-and-how-to-s/how-to-open-close-arc#TOC-Closing-ARC');
    });

    controller.hears(['opening best', 'open best'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'sun_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Open the BEST Lab, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/shift-duties-and-how-to-s/how-to-open-close-arc#TOC-Opening-BEST');
    });

    controller.hears(['closing best', 'close best'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'new_moon_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Close the BEST Lab, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/shift-duties-and-how-to-s/how-to-open-close-arc#TOC-Closing-BEST');
    });

    controller.hears(['opening lsm', 'open lsm'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'sun_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Open LSM, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/best-lsm/lsm#TOC-Opening-LSM');
    });

    controller.hears(['closing lsm', 'close lsm'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'new_moon_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Close LSM, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/best-lsm/lsm#TOC-Closing-LSM');
    });

    controller.hears(['closing kessler', 'close kessler', 'closing rbhs', 'close rbhs'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'new_moon_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Close Kessler, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/rbhs-piscataway-lab/shift-responsibilites#TOC-How-to-Close-Kessler');
    });

    controller.hears(['opening kessler', 'open kessler', 'open rbhs', 'opening rbhs'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'sun_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Open Kessler, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/rbhs-piscataway-lab/shift-responsibilites#TOC-How-to-Open-Kessler');
    });

    controller.hears(['opening kessler', 'open kessler', 'open rbhs', 'opening rbhs'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'sun_with_face',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Open Kessler, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/rbhs-piscataway-lab/shift-responsibilites#TOC-How-to-Open-Kessler');
    });

    controller.hears(['hex', 'hexing'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'wrench',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'To find out How to Hex Doors, Go Here: https://sites.google.com/a/scarletmail.rutgers.edu/busch-consultant-wiki/shift-duties-and-how-to-s/hexing-arc-lab-doors');
    });

    controller.hears(['Busch staff page', 'staff page'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'page_facing_up',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'Here is the link to our staff page!: https://supportcenter.oit-nbcs.rutgers.edu/content/busch-consultants-staff-page');
    });

    controller.hears(['pts', 'performance tracking system'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'helicopter',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'Here is PTS: https://sc-apps.rutgers.edu/pts/');
    });

    controller.hears(['locks', 'lock combo', 'lock'], 'direct_message,direct_mention,mention', function(bot, message) {
      bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'lock',
        }, function(err, res) {
          if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
          }
      });
      
      bot.reply(message, 'The LSM Printer Locks and BSC Printer Locks are the last four digits of the Busch Supervisor Phone Number. The Locks for ARC Cabinets is LSM!');
    });
}



function ShowHelp(bot, message){
    //bot.reply(message, "x");
}


Initialize();