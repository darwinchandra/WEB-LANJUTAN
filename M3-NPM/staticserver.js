var express = require('express');
var server = express();
var logger = require('morgan');

server.use(logger('dev'));
server.use(express.static(__dirname + '/public'));
server.get('/', (req, res) => {
  res.send('<h1>abc</h1>');
});
server.listen(4000, function () {
  console.log('Server Static dijalankan');
});
