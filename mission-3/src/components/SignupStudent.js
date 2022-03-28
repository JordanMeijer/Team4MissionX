import React from "react";
import "../components/LoginPage.css";

function SignupStudent() {
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
      </form>
      <div>
        <button input type="submit" name="LOG IN" className="login_btn">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignupStudent;
