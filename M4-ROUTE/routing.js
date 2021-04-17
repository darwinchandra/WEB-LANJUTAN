var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

var data = bodyParser.urlencoded({ extended: false });

app.post('/datalogin', data, function (req, res) {
  res.send(req.body);
});

app.listen(3500, function () {
  console.log('Server Static dijalankan');
});
