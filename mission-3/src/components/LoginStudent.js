import React from "react";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";
import "../components/LoginPage.css";

function LoginStudent() {
  return (
    <div>
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
  );
}

export default LoginStudent;
