import React from "react";
import "../components/LoginPage.css";

function SignupTeacher() {
  function signUpAPI() {
    const name = document.getElementById("full_name").value;
    const email = document.getElementById("email_address").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const body = {
      name: name,
      email: email,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:4000/create_user_teacher", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(`You've successfully added a new user`))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <input
        type="text"
        name="create_full_name"
        placeholder="Full Name"
        className="signup_inputs"
        id="full_name"
      />
      <input
        type="text"
        name="create_email_address"
        placeholder="Email Address"
        className="signup_inputs"
        id="email_address"
      />
      <input
        type="text"
        name="create_password"
        placeholder="Password"
        className="signup_inputs"
        id="password"
      />
      <input
        type="text"
        name="confirm_password"
        placeholder="Confirm Password"
        className="signup_inputs"
        id="confirm_password"
      />
      <div>
        <button onClick={signUpAPI} className="submit_btn">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignupTeacher;
