import React from "react";
import "./TeacherDashboard.css";

import SideBar from "../components/SideBar";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

export default function StudentDashboard() {
  return (
    <>
      <StudentTeacherHeader
        render_project_bar={true}
        text_middle="Ask Teacher for Help"
      />
      <div className="Dashboard">
        <SideBar page="/studentdashboard" TeacherVersion={false}/>
        <div className="DashboardContentsParentContainer">
          <div className="DashboardContentsChildContainer">
            <h1 className="BeginnerCourseText">Explore Scratch Blocks</h1>
            <p>
              Learn the basic function of some basic scratch blocks such as
              “say,” “wait,” “go to” and “hide.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
