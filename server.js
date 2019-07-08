'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
//var game = require('./scripts/game.js')
var express = require("express");

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  var app = express();
  app.use(express.static(__dirname));

  myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
