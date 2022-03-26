import React from "react";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";
import "../components/LoginPage.css";

function SignUpTextInputs() {
  return (
    <div>
      <form>
        <input
          type="text"
          name="FUll Name"
          placeholder="Full Name"
          className="Sign_inputs"
        />
        <input
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="Sign_inputs"
        />
        <input
          type="text"
          name="Password"
          placeholder="Password"
          className="Sign_inputs"
        />
        <input
          type="text"
          name="Confirm Password"
          placeholder="Confirm Password"
          className="Sign_inputs"
        />
      </form>
      <div>
        <button input type="submit" name="LOG IN" className="login_btn">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignUpTextInputs;
