const http = require('http');
const fs = require('fs');

//buat object server dengan listen port 3400
http
  .createServer(function (req, res) {
    fs.readFile('index.html', (err, data) => {
      if (err) throw err;

      //http Header dengan status code 200 yang artinya OK
      res.writeHead(200, { 'Content-Type': 'text/html' });
      //Tampilkan ke browser / client berisi  index.html
      res.write(data);
      //Respon diakhiri
      res.end();
    });
  })
  .listen(3400);
