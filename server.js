#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static('js'));

http.listen(8080, function(){
    console.log('listening on *:8080');
});
