const UserModel = require("../models").user;
const bcrypt = require("bcrypt");
const registerApp = async (req, res) => {
  try {
    let body = req.body;

    body.password = await bcrypt.hashSync(body.password, 10);
    const user = await UserModel.create(body);
    console.log(user);

    res.status(201).json({
      status: "Berhasil",
      messege: "Register Akun Universitas Berhasil",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
  }
};

const loginApp = async (req, res) => {
  try {
    const { email, password } = req.body;
    // CEK EMAIL DULU ADAA ATAU NGGAK
    const dataUser = await UserModel.findOne({
      attributes: ["email", "password"],
      where: {
        email: email,
      },
    });
    // CEK EMAIL DAN PASSWORD HARUS SAMA DARI DATABASE
    // CEK EMAILNYA
    if (dataUser === null) {
      return res.status(422).json({
        status: "Gagal",
        messege: "Anda Belum Terdaftar Di Data Aplikasi Universitas",
      });
    }
    // CEK PASSWORDNYA
    const verify = bcrypt.compareSync(password, dataUser.password);
    if (!verify) {
      return res.status(422).json({
        status: "Gagal",
        messege: "Password Tidak Sama",
      });
    }

    return res.json({
      status: "Berhasil",
      messsege: `Anda Berhasil Login Aplikasi Universitas`,
      data: dataUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
  }
};

module.exports = { registerApp, loginApp };
