const http = require("http");
const fs = require("fs");
const app = require("./app");
const server = http.createServer(
  app
);

process.env.JWT_KEY = "simbio_app_auth";
server.listen(3000, () => {
  console.log(__dirname);
});
