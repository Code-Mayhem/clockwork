//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=4000; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

var http = require('http');

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

var dispatcher = require('httpdispatcher');

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});






/*var express = require('express');
var website = express();
var http = require('http').Server(website);
var path = require('path');
var favicon = require('serve-favicon');
var exphbs  = require('express3-handlebars');

website.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index.hbs',
    partialsDir: ['_src/views']
}));

website.set('port', process.env.PORT || 4000);
website.use(express.static(path.join(__dirname, '_build')));

require('./routes')(website);
var jsonFile = './data/data.json';

//require('./website/sms');

http.listen(website.get('port'), function(){
    console.log('website is listening on port: ' + website.get('port'));
});

module.exports = website;*/