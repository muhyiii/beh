const MahasiswaModel = require("../models/").mahasiswa;
const bcrypt = require("bcrypt");

const registerMahasiswa = async (req, res) => {
  try {
    let body =
      //  {
      //   username,
      //   email,
      //   password,
      //   namaLengkap,
      //   nisn,
      //   tanggalLahir,
      //   nomerHp,
      //   jalurMasuk,
      // }
      req.body;
    body.password = await bcrypt.hashSync(body.password, 10);
    // req.body.password = await bcrypt.hashSync(req.body.password, 10);
    const mahasiswa = await MahasiswaModel.create(body);
    // const mahasiswa = await MahasiswaModel.create({
    //   username: username,
    //   email: email,
    //   password: password,
    //   namaLengkap: namaLengkap,
    //   nisn: nisn,
    //   tanggalLahir: tanggalLahir,
    //   nomerHp: nomerHp,
    //   jalurMasuk: jalurMasuk,
    // });
    console.log(mahasiswa);

    res.status(200).json({
      status: "Berhasil",
      messege: "Register Mahasiswa Universitas Berhasil",
      data: mahasiswa,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
  }
};

module.exports = { registerMahasiswa };
