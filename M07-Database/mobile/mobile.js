const express = require("express");
const router = express.Router();
const apotekerRoutes = require("./routes/apoteker");



// Router yang digunakan
router.use("/apoteker", apotekerRoutes);
module.exports = router;
