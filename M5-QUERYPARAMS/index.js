var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//https://github.com/expressjs/morgan
var logger = require('morgan');

//Module morgan merupakan modul untuk logger yang berfungsi untuk pencatatan tiap request ke server. Pencatatan ini atau istilahnya logging akan ditunjukkan di console terminal.
app.use(logger('dev'));

//route dengan method get
app.get('/api/:idpustakawan/:password', function (req, res) {
  res.statusCode = 200;
  //content-type pada expressjs
  res.setHeader('Content-Type', 'text/plain');
  res.send(req.params);
});

app.get('/api/cari', function (req, res, next) {
  var idpustakawan = req.query.idpustakawan;
  console.log(`Id Pustakawan : ${idpustakawan}`);
  var password = req.query.password;
  console.log(`password : ${password}`);
  res.send(password);
});

app.listen(4000, function () {
  console.log('Server run');
});
