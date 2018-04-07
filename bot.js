console.log('The bot is starting');

var Twit = require ('twit');

var config = require('./config');

var T = new Twit(config);

//get command for searching

var params = { 
    screen_name: 'notaussrbot', count: 5 };

T.get('statuses/user_timeline', params, function(err, data,){
for(var i = 0; i<data.length; i++)
    console.log("@notaussrbot" + data[i].text);
    console.log("-----------------------------------");

});





//posting --- tweeting

// stream () - to assign certain events to the stream. 