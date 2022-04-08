const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { studentSignupRouter } = require("./studentsignup.routes");
const { teacherSignupRouter } = require("./teachersignup.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./src"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// to help process requests easier

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.PASSWORD,
});

app.get("/teacherdashboard/studentprofiles", (req, res) => {
  console.log("Received a GET request to /");
  connection.query(
    `SELECT StudentName, ProfilePic FROM missio20_team4.Student LIMIT 15;`,
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

app.get("/getpass", (req, res) => {
  console.log("Received a GET request to /");
  connection.query(
    `select Password from missio20_team4.Student where StudentID = 18;`,
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

app.get("/teacherdashboard/helprequests", (req, res) => {
  console.log("Received a GET request to /");
  connection.query(
    `SELECT missio20_team4.HelpRequest.*,missio20_team4.Student.studentname,missio20_team4.Student.ProfilePic
    FROM missio20_team4.HelpRequest
    left Join missio20_team4.Student on missio20_team4.HelpRequest.StudentID = missio20_team4.Student.StudentID;`,
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

// API to Login Students /
app.post('/student_login', (req, res) => {
  console.log(req.body);
  const {email, password} = req.body;

  connection.query(
    `SELECT Password, StudentID FROM missio20_team4.Student WHERE Email = "${email}";`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You' got an error ! " + error.code);
        return;
      } 
      else {
        if (result.length === 0) {
          res.send('not found');
          return;
        }
        else if((result[0].Password === password)) {
          const userID = result[0].StudentID;
          res.send(`${userID}`);
          return;
        }
        else {
          res.send('invalid');
          return;
        }
      }
    }
  );
});

// API to Login Teachers /
app.post('/teacher_login', (req, res) => {
  const {email, password} = req.body;

  connection.query(
    `SELECT Password, TeacherID FROM missio20_team4.Teacher WHERE Email = "${email}";`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You' got an error ! " + error.code);
        return;
      } 
      else {
        if (result.length === 0) {
          res.send('not found');
          return;
        }
        else if((result[0].Password === password)) {
          const userID = result[0].TeacherID;
          res.send(`${userID}`);
          return;
        }
        else {
          res.send('invalid');
          return;
        }
      }
    }
  );
});

app.get("/studentprofile/:studentID", (req, res) => {
  console.log(`Received a GET request to /studentprofile/:studentID`);
  const { studentID } = req.params;
  connection.query(
    `SELECT missio20_team4.Student.*, missio20_team4.Teacher.Name FROM missio20_team4.Student
                    INNER JOIN missio20_team4.Teacher ON missio20_team4.Student.TeacherID=missio20_team4.Teacher.TeacherID
                    HAVING missio20_team4.Student.StudentID=${studentID}`,
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

app.get("/teacherprofile/:teacherID", (req, res) => {
  console.log(`Received a GET request to /teacherprofile/:teacherID`);
  const { teacherID } = req.params;
  connection.query(
    `SELECT * FROM missio20_team4.Teacher WHERE TeacherID=${teacherID}`,
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

app.use("/create_user_student/", studentSignupRouter);

app.use("/create_user_teacher/", teacherSignupRouter);


const PORT = process.env.PORT;
console.log("server running at port", PORT);
app.listen(PORT);