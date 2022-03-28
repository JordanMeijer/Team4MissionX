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
          className="signup_inputs"
        />
        <input
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="signup_inputs"
        />
        <input
          type="text"
          name="Password"
          placeholder="Password"
          className="signup_inputs"
        />
        <input
          type="text"
          name="Confirm Password"
          placeholder="Confirm Password"
          className="signup_inputs"
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

export default SignupStudent;
