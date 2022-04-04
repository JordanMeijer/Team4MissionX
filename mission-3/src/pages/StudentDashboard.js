import React from "react";
import "./TeacherDashboard.css";
import "./StudentDashboard.css";

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
        <SideBar page="/studentdashboard" TeacherVersion={false} />
        <div className="DashboardContentsParentContainer">
          <div className="DashboardContentsChildContainer">
            <h3 className="StudentDashboardH3Tag">Explore Scratch Blocks</h3>
            <p className="StudentDashboardPTag">
              Learn the basic function of some basic scratch blocks such as
              “say,” “wait,” “go to” and “hide.”
            </p>
            <div className="StudentDashboardBlocks">
              <div>
                <p className="StudentDashboardBlockPTag">Look Blocks</p>
                <img 
                  className="" 
                  src="/images/Student Areas/Screen Shot 2020-04-29 at 9.09.52 PM@2x.png" 
                  alt="control_blocks" />
              </div>
              <div>
                <p className="StudentDashboardBlockPTag">Control Blocks</p>
                <img 
                  className="" 
                  src="/images/Student Areas/Screen Shot 2020-04-29 at 9.09.52 PM@2x.png" 
                  alt="control_blocks" />
              </div>
              <div>
                <p className="StudentDashboardBlockPTag">Motion Blocks</p>
                <img 
                  className="" 
                  src="/images/Student Areas/Screen Shot 2020-04-29 at 9.09.52 PM@2x.png" 
                  alt="control_blocks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
