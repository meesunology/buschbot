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

    var client = new XMLHttpRequest();

	controller.hears(['opening', 'open'] && ['arc', 'ARC'], 'direct_message,direct_mention,mention', function(bot, message) {
		var option = './responses/arcOpening.txt';
		client.open('GET', option);
		client.onreadystatechange = function() {
			alert(client.responseText);
		}
		client.send();
    	bot.reply()
	});
}



function ShowHelp(bot, message){
    //bot.reply(message, "x");
}


Initialize();