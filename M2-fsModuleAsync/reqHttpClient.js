var http = require('http');

//membuat property options yang akan digunakan nantinya
var options = {
  hostname: 'www.shopee.com',
  port: 80,
  path: '/',
  method: 'GET',

  //Tipe header yang diingikan  yaitu tipe content json
  headers: {
    'Content-Type': 'application/json',
  },
};

var req = http.request(options, function (response) {
  console.log(response.statusCode);
  console.log(response.statusMessage);
  console.log(response.headers);
});

//untuk handle error
req.on('error', function (e) {
  console.log('Error: ' + e.message);
});

//tutup koneksi diakhir.
req.end();
