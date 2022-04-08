import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginPage.css";

function LoginTeacher() {

  let navigate = useNavigate();

  function certifyData(response) {
    if (response === 'invalid') {
      alert(`Incorrect password`);
    } 
    else if (response === 'not found') {
      alert(`Email address not found`);
    }
    else {
      navigate("/teacherprofile", {state: response});
    }
  }
  
  function logInAPI() {
    const email = document.getElementById("teacher_email_address").value;
    const password = document.getElementById("teacher_password").value;
  
    if (email === '') {
      alert(`Email address must be provided`)
      return;
    }

    if (password === '') {
      alert(`Please type your password`)
      return;
    };

    const body = {
      "email": email,
      "password": password
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    };

    fetch("http://localhost:4000/teacher_login", requestOptions)
      .then((response) => response.text())
      .then((result) => certifyData(result))
      .catch((error) => alert("error", error));
  }

  return (
    <div>
      <input
        type="text"
        name="Email Address"
        placeholder="Email Address"
        className="login_inputs"
        id="teacher_email_address"
      />
      <input
        type="text"
        name="Password"
        placeholder="Password"
        className="login_inputs"
        id="teacher_password"
      />
      <div>
        <button onClick={logInAPI} className="submit_btn">
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default LoginTeacher;
