const mysql = require("mysql2");
const express = require("express");
const studentSignupRouter = express.Router();

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.PASSWORD,
});

<<<<<<< HEAD
studentSignupRouter.post("/", (req, res) => {
=======
studentSignupRouter.post('/', (req, res) => {
>>>>>>> 75d274d8724273a8a1544c913b454cbec742cc2a
  const { name, email, password } = req.body;

  connection.query(
    `INSERT INTO missio20_team4.Student (StudentName, Email, Password) VALUES (?, ?, ?);`,
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log("Failed to create new user:" + err);
        res.sendStatus(500);
        return;
      } else {
        console.log(result);
        res.send("User created successfully");
      }
    }
  );
});

module.exports = {
  studentSignupRouter
};
