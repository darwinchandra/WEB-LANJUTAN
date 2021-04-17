var express = require('express');
var server = express();
var logger = require('morgan');

server.use(logger('dev'));
server.use(express.static(__dirname + '/public'));

server.listen(3500, function () {
  console.log('Server Static dijalankan');
});
