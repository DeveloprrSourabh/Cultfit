const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

//middleware

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

app.get("/about", middleware, (req, res) => {
  res.send(`Hello about`);
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
