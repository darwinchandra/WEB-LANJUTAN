var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_apotek",
  dateStrings: "date"
});

module.exports = connection;
