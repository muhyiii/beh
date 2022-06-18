const express = require("express");
const { registerApp, loginApp } = require("../controller/Auth");
const { registerMahasiswa } = require("../controller/Mahasiswa");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    status: "Ok || Berhasil",
    message: "Anda Berhasil Mengakses Route Kami",
  });
});

/// REGISTER APP
router.post("/register", registerApp);
/// LOGIN APP
router.post("/login", loginApp);

/// REGISTER MAHASISWA
router.post("/register/mahasiswa", registerMahasiswa);
module.exports = router;
