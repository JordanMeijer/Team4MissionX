import React from "react";
import "../components/LoginPage.css";

function SignupTeacher() {
  return (
    <div>
      <form action="/user_create" method="POST">
        <input
          type="text"
          name="create_full_name"
          placeholder="Full Name"
          className="signup_inputs"
        />
        <input
          type="text"
          name="create_email_address"
          placeholder="Email Address"
          className="signup_inputs"
        />
        <input
          type="text"
          name="create_password"
          placeholder="Password"
          className="signup_inputs"
        />
        <input
          type="text"
          name="confirm_password"
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

export default SignupTeacher;
