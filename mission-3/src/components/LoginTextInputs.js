import React from "react";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";
import "../components/LoginPage.css";

function LoginTextInputs() {
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
          <button className="login_button">LOG IN</button>
          <button className="signup_button">SIGN UP</button>
        </div>
        <form>
          <input
            type="text"
            name="Email Address"
            placeholder="Email Address"
            className="inputs"
          />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            className="inputs"
          />
        </form>
        <div>
          <button input type="submit" name="LOG IN" className="submit_btn">
            LOG IN
          </button>
        </div>
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
        <form>
          <input
            type="text"
            name="Email Address"
            placeholder="Email Address"
            className="inputs"
          />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            className="inputs"
          />
        </form>
        <div>
          <button input type="submit" name="LOG IN" className="submit_btn">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginTextInputs;
