const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

const PORT = process.env.EXPRESS_PORT;
console.log("Server running at port", PORT);
app.listen(PORT);
