import React from "react";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";

function SignUpTextInputs() {
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
        <form>
          <input type="text">Full Name</input>
          <input type="text">Email Address</input>
          <input type="text">Password</input>
          <input type="text"> Confirm Password</input>
        </form>
        <div>
          <input type="submit">SIGN UP</input>
        </div>
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
          <input type="text">Full Name</input>
          <input type="text">Email Address</input>
          <input type="text">Password</input>
          <input type="text"> Confirm Password</input>
        </form>
        <div>
          <input type="submit">SIGN UP</input>
        </div>
      </div>
    </div>
  );
}

export default SignUpTextInputs;
