const conn = require("./db");
const async = require("async");
exports.cariObat = (req, res, next) => {
  var id = req.params.id;

  let query = "select * from tbl_obat";

  conn.query(query, [id], (err, rows) => {
    
    if (err) {
      return res.status(400).send({
        message: "Failed when query data",
      });
    } else {
      if (rows.length < 1) {
        return res.status(404).send({
          message: "Not Found",
        });
      } else {
        return res.status(200).send({
          data: rows,
        });
      }
    }
  });
};

exports.tambahObat = (req, res, next) => {
  let nama = req.body.nama; //body.nama; nama sesuai dengan body yang dikirim dari client
  let keterangan = req.body.keterangan;

  var data = {
    nama: nama, //"nama" : nama, nama dalam kutip disesuaikan dengan nama field (kolom) dari tabel
    keterangan: keterangan
  };
  let sql = "insert into tbl_obat value (?)";

  conn.query(sql, data, (err, rows) => {
    if (err) {
      return res.status(400).send({
        status: 400,
      });
    } else {
      return res.status(200).send({
        status: 200,
      });
    }
  });
};

exports.updateObat = (req, res) => {
  var id = req.params.id;
  let nama = req.body.nama;
  let keterangan = req.body.keterangan;

  var sql = "UPDATE tbl_obat SET nama=?, keterangan= ? WHERE id= ?";

  // params dalam kurung siku "[]", diurutkan sesuai dengan tanda tanya pada query di atas.
  conn.query(sql, [nama, keterangan, harga, id], (err, result) => {
    if (err) {
      return res.status(400).send({
        status: 400,
      });
    } else {
      return res.status(200).send({
        status: 200,
      });
    }
  });
};
exports.hapusObat = (req, res) => {
  var id = req.params.id;

  var sql = "DELETE FROM tbl_obat WHERE id=?";

  // params dalam kurung siku "[]", diurutkan sesuai dengan tanda tanya pada query di atas.
  conn.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(400).send({
        status: 400,
      });
    } else {
      return res.status(200).send({
        status: 200,
      });
    }
  });
};

