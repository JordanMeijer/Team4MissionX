import React from "react";
import "../components/LoginPage.css";

function SignupTeacher() {
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

export default SignupTeacher;
