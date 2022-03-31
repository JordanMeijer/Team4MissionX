import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const express = require("express");
const dotenv = require('dotenv').config();
const app = express();

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});


app.post("./);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const PORT = process.env.EXPRESS_PORT;
console.log('Server running at port', PORT);
app.listen(PORT);