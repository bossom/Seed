#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img'));


http.listen(3000, function(){
    console.log('listening on *:8080');
});
