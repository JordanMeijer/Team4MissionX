import React from "react";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";

function LoginSignUp() {
  return (
    <div className="loginbox">
      <div>
        <img src={StudentLoginImage} alt="studentloginimage" />
        <h1>Student</h1>
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
      <div>
        <img src={TeacherLoginImage} alt="teacherloginimage" />
        <h1>Teachers</h1>
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
