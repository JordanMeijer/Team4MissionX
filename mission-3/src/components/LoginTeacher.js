import React from "react";
import "../components/LoginPage.css";

function LoginTeacher() {
  return (
    <div>
      <form>
        <input
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="login_inputs"
        />
        <input
          type="text"
          name="Password"
          placeholder="Password"
          className="login_inputs"
        />
        <div>
          <button type="submit" className="submit_btn">
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginTeacher;
