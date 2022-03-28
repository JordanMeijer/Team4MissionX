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
          className="Signup_inputs"
        />
        <input
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="Signup_inputs"
        />
        <input
          type="text"
          name="Password"
          placeholder="Password"
          className="Signup_inputs"
        />
        <input
          type="text"
          name="Confirm Password"
          placeholder="Confirm Password"
          className="Signup_inputs"
        />
        <div>
          <button type="submit" className="submit_btn">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupTeacher;
