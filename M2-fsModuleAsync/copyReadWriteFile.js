const fs = require('fs');
const http = require('http');
fs.copyFile('daftar_belanjaan.html', 'Copyof_daftar_belanjaan.html', (err) => {
  if (err) throw err;
  fs.rename('Copyof_daftar_belanjaan.html', 'Belanjaan_Pribadi.html', (err) => {
    if (err) throw err;
    console.log('hasil copy berhasil di copy dan rename');
  });
});

http
  .createServer(function (req, res) {
    fs.readFile('Belanjaan_Pribadi.html', (err, data) => {
      if (err) throw err;
      //http Header dengan status code 200 yang artinya OK
      res.writeHead(200, { 'Content-Type': 'text/html' });
      //Tampilkan ke browser / client berisi  daftar belanjaan hasil copy
      res.write(data);
      //Respon diakhiri
      res.end();
    });
  })
  .listen(3400);
