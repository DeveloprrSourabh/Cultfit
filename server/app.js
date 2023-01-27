const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

// const User = require('./model/userSchema');

app.use(express.json());

app.use(require("./router/auth"));

app.get("/contact", (req, res) => {
    res.cookie("test","thapa")
  res.send(`Hello contact`);
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
