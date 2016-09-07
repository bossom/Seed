#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();
var http = require('http').Server(app);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img'));


http.listen(server_port, server_ip_address, function(){
    console.log('listening on ' + server_ip_address + ': ' + server_port);
});
