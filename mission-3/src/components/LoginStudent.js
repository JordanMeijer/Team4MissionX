import React from "react";
import "../components/LoginPage.css";

function LoginStudent() {

function logInAPI() {
  const email = document.getElementById("email_address").value;
  const password = document.getElementById("password").value;
  
  if (email === '') {
    alert(`Email address must be provided`)
    return;
  }

  if (password === '') {
    alert(`Please type your password`)
    return;
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(body),
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
        name="Email Address"
        placeholder="Email Address"
        className="login_inputs"
        id="email_address"
      />
      <input
        type="text"
        name="Password"
        placeholder="Password"
        className="login_inputs"
        id="password"
      />
      <div>
        <button onClick={logInAPI} className="submit_btn">
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default LoginStudent;
