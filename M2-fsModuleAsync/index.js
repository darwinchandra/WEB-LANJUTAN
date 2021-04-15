const http = require('http');
const fs = require('fs');


//buat object server dengan listen port 3400
http
  .createServer(function (req, res) {

    //http Header dengan status code 200 yang artinya OK
    res.writeHead(200, { 'Content-Type': 'text/html' });


    //Respon ke browser / client berisi pesan html
    res.write('<H1>Ini adalah pesan dengan HTML </H1>');

    //Respon diakhiri
    res.end();
  })
  .listen(3400);

  