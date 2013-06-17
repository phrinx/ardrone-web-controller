var express = require('express');
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var app = express();
var speed = 0.1;

var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

// serve static files
app.use(express.static(__dirname+'/web'));

app.get('/takeoff', function(req, res){
    console.log('taking off.');
    client.takeoff(function(){
        res.end();
    });
});

app.get('/land', function(req, res){
	console.log('landing.');
  	client.land(function(){
  		res.end();
  	});
});

app.get('/left', function(req, res){
    console.log('left.');
    client.left(speed);
    res.end();
});

app.get('/right', function(req, res){
    console.log('right.');
    client.right(speed);
    res.end();
});

app.get('/front', function(req, res){
    console.log('front.');
    client.front(speed);
    res.end();
});

app.get('/back', function(req, res){
    console.log('back.');
    client.back(speed);
    res.end();
});

app.get('/stop', function(req, res){
    console.log('stop.');
    client.stop()
    res.end();
});

app.get('/blinkRed', function(req, res){
    console.log('blinkRed.');
    client.animateLeds('blinkRed', 5, 2)
    res.end();
});

// log level to error
io.set('log level', 1);

// stream navdata
io.sockets.on('connection', function (socket) {

    client.on('navdata', function(data) {
        //console.log(data);
        socket.emit('navdata', data);
    });
});

server.listen(3000,'dmbair.local');
console.log('ar.drone navigator listening on port 3000.');
