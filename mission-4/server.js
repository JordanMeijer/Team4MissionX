const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

app.get('/', (req, res) => {
  console.log('Received a GET request to /');
  // Run the SQL query, when you get a request to /
  connection.query(`SELECT * FROM missio20_team4.Student LIMIT 15;`, (error, result) => {
    if (error) {
      console.log('Error', error);
      res.send("You' got an error ! " + error.code);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//wasd

const PORT = process.env.PORT;
console.log("server running at port", PORT)
app.listen(PORT);