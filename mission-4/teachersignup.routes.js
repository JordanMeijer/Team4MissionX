const mysql = require("mysql2");
const express = require("express");
const teacherSignupRouter = express.Router();

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.PASSWORD,
});

teacherSignupRouter.post("/", (req, res) => {
  const { name, email, password } = req.body;

  connection.query(
    `INSERT INTO missio20_team4.Teacher (Name, Email, Password) VALUES (?, ?, ?);`,
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
  teacherSignupRouter,
};
