var Botkit;
var controller;
var bot;

var auth = require('./reference/auth.js');

function Initialize(){
    Botkit = require('./botkit/lib/Botkit.js');
    controller = Botkit.slackbot({});
    bot = controller.spawn({
        token: auth.slackbot
    }).startRTM();

	controller.hears(['opening', 'open'] && ['arc', 'ARC'], 'direct_message,direct_mention,mention', function(bot, message) {
    	bot.api.reactions.add({
    	    timestamp: message.ts,
        	channel: message.channel,
        	name: 'cactus',
    	}, function(err, res) {
        	if (err) {
        	    bot.botkit.log('Failed to add emoji reaction :(', err);
        	}
   		});
	});
}



function ShowHelp(bot, message){
    //bot.reply(message, "x");
}


Initialize();