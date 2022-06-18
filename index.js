const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3400;
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use(router)
app.listen(port,
  
  // "192.168.5.243" || "localhost", 
  () => {
  console.log(
    `....................Server Berjalan di port ${port} Berhasil....................`
  );
});
