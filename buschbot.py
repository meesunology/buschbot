var Botkit;
var controller;
var bot;

var auth = require('./reference/auth.js');

function Initialize(){
    Botkit = require('./node_modules/botkit/lib/Botkit.js');
    controller = Botkit.slackbot({});
    bot = controller.spawn({
        token: auth.slackbot
    }).startRTM();

    //have menus
}



function ShowHelp(bot, message){
    //bot.reply(message, "x");
}


Initialize();