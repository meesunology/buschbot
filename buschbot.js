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

    refer = require('./responses');

    var fs = require('fs')
	fs.readFile(filename, 'utf8', function(err, data) {
  		if (err) throw err;
  		console.log('OK: ' + filename);
  		console.log(data)
	});

	controller.hears(['opening', 'open'] && ['arc', 'ARC'], 'direct_message,direct_mention,mention', function(bot, message) {

    	bot.reply()
	});
}



function ShowHelp(bot, message){
    //bot.reply(message, "x");
}


Initialize();