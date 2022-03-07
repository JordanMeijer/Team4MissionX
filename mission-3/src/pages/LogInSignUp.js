import React from "react";
import StudentLoginImage from "Team4MissionXmission-3srcimagesHomeStudents@2x.png";
import TeacherLoginImage from "Team4MissionXmission-3srcimagesHome\teacher@2x.png";

export default function LogInSignUp() {
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
