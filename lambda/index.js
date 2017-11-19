"use strict";
var Alexa = require("alexa-sdk");
var SKILL_NAME = "Good Morning Skill";
var APP_ID = "amzn1.ask.skill.a85d4f8b-158c-4dca-8609-e729dc291e7a";

var LIST = [
    "Good Morning Friend",
    "A Very Good Morning",
    "Its a Beautiful Day"
];

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
}

var handlers = {
    'LaunchRequest': function() {
        this.emit('GoodMorning');
    },

    'GoodMorningIntent': function() {
        this.emit('GoodMorning');
    },
    'GoodMorning': function() {
        var myIndex = Math.floor(Math.random() * LIST.length);
        var randomQuote = LIST[myIndex];

        var speechOutput = ""+ randomQuote;

        this.emit(":tellWithCard", speechOutput, SKILL_NAME, randomQuote);
    },
    'AMAZON.HelpIntent': function() {
        var speechOutput = "Say Good Morning Alexa";
        var reprompt = "Say Good Morning Alexa";
        this.emit(":ask", speechOutput, reprompt);
        
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', "GoodBye!");
        
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', "GoodBye!");

    }

}
