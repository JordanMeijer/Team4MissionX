const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require(`body-parser`);

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

app.get("/", (req, res) => {
  console.log("Received a GET request to /");
  // Run the SQL query, when you get a request to /
  connection.query(
    `SELECT * FROM missio20_team4.Student LIMIT 15;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You' got an error ! " + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

//wasd

app.post("/user_create", (req, res) => {
  const name = req.body.create_full_name;
  const email = req.body.create_email_address;
  const password = req.body.create_password;

  connection.query(
    `INSERT INTO Student (name, email, password) VALUES (?, ?)`,
    [name, email, password],
    (error, result) => {
      if (error) {
        console.log(`Error`, error);
        res.send("Invalid" + error.code);
      } else {
        console.log(result);
        res.send("Sign up successful");
      }
    }
  );
});

const PORT = process.env.PORT;
console.log("server running at port", PORT);
app.listen(PORT);
