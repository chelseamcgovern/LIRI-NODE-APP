require("dotenv").config();

//-------------------------MAIN PROCESS-------------------------------------------

processCommands(inputCommand, commandParam);

//-------------------VARIABLES----------------------------------------------------

//Loading modules
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require("./keys.js");
var tweetsArray = [];
var inputCommand = process.argv[2];
var commandParam = process.argv[3];

var twitterKeys = keys.twitterKeys;
var tmdbKey = keys.tmdbKey;

var client = new Twitter({
  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret
});

//-----------------------FUNCTIONS-----------------------------------------------

//This function processes the input commands
function processCommands(command, commandParam){

	//console.log(commandParam);
        switch(command){
        case 'my-tweets':
		getMyTweets(); break;
	default: 
		console.log("Invalid command. Please type any of the following commnds: my-tweets spotify-this-song movie-this or do-what-it-says");
};


}

function getMyTweets(){
var params = {screen_name: 'notarussianbot', count: 5, exclude_replies:true, trim_user:true};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
		//console.log(tweets);
		tweetsArray = tweets;

		for(i=0; i<tweetsArray.length; i++){
		console.log("Created at: " + tweetsArray[i].created_at);
		console.log("Text: " + tweetsArray[i].text);
		console.log('--------------------------------------');
		};
	}
	  else{
              console.log(error);
		}
	});

}





