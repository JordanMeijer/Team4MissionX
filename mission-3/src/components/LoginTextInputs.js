import React from "react";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";

function LoginTextInputs() {
  return (
    <div className="login_signup_box">
      <div className="student_slide">
        <div className="student_image">
          <img src={StudentLoginImage} alt="studentloginimage"></img>
        </div>
        <div>
          <h1 className="student_title">Student</h1>
        </div>
        <div>
          <button className="btn">Log In</button>
          <button className="btn">Sign Up</button>
        </div>
        <div>
          <input type="submit">LOG IN</input>
        </div>
        <form>
          <input type="text">Email Address</input>
          <input type="text">Password</input>
        </form>
      </div>
      <div className="teacher_slide">
        <div className="teacher_image">
          <img src={TeacherLoginImage} alt="teacherloginimage"></img>
        </div>
        <div>
          <h1 className="teacher_title">Teachers</h1>
        </div>
        <div>
          <button className="btn">Log In</button>
          <button className="btn">Sign Up</button>
        </div>
        <form>
          <input type="text">Email Address</input>
          <input type="text">Password</input>
        </form>
        <div>
          <input type="submit">LOG IN</input>
        </div>
      </div>
    </div>
  );
}

export default LoginTextInputs;