import React from "react";
import "./Profile.css";
import HomeHeader from "../components/HomeHeader";

export default function Profile() {
  return (
    <>
      <HomeHeader />
      <div className="profile_body">
        <div className="profile_settings">
          <h1> Photo </h1>
        </div>
        <div className="profile_data">
          <div>
            <h1> Data </h1>
          </div>
          <div>
            <button>BACK TO PROJECTS</button>
          </div>
        </div>
      </div>
    </>
  );
}
