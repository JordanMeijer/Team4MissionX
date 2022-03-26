import React, { useState } from "react";
import LoginStudent from "../components/LoginStudent";
import LoginTeacher from "../components/LoginTeacher";
import SignupStudent from "../components/SignupStudent";
import SignupTeacher from "../components/SignupTeacher";
import "../components/LoginPage.css";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";

function LoginSignupPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="login_signup_box">
      <div className="student_slide">
        <div>
          <img
            src={StudentLoginImage}
            alt="student_login_image"
            className="student_image"
          ></img>
        </div>
        <div>
          <h1 className="student_title">Students</h1>
        </div>
        <div>
          <button className="login_button" onClick={() => setToggle(true)}>
            LOG IN
          </button>
          <button className="signup_button">SIGN UP</button>
        </div>
        <>{toggle ? LoginStudent : SignupStudent}</>
      </div>
      <div className="teacher_slide">
        <div>
          <img
            src={TeacherLoginImage}
            alt="teacher_login_image"
            className="teacher_image"
          ></img>
        </div>
        <div>
          <h1 className="teacher_title">Teachers</h1>
        </div>
        <div>
          <button className="login_button">LOG IN</button>
          <button className="signup_button">SIGN UP</button>
        </div>
        {toggle ? LoginTeacher : SignupTeacher}
      </div>
    </div>
  );
}

export default LoginSignupPage;
