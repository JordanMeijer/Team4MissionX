import React from "react";

function LoginTeacher() {
  return (
    <div>
      <form>
        <input
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="inputs"
        />
        <input
          type="text"
          name="Password"
          placeholder="Password"
          className="inputs"
        />
      </form>
      <div>
        <button input type="submit" name="LOG IN" className="submit_btn">
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default LoginTeacher;
