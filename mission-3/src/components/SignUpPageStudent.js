import React from "react";

function SignUpPageStudent(props) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="signupbutton">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPageStudent;
