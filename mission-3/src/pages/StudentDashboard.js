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
                <div className="StudentDashboardLookBlocks">
                  <img 
                    className="StudentDashboardLookBlocks" 
                    src="/images/Student Areas/Screen Shot 2020-04-29 at 9.09.52 PM@2x.png" 
                    alt="look_blocks" />
                  <img
                    className="StudentDashboardLookBlocks" 
                    src="/images/Student Areas/Screen Shot 2020-04-25 at 11.30.04 PM@2x.png" 
                    alt="control_look_addition" />
                </div>
              </div>
              <div>
                <p className="StudentDashboardBlockPTag">Control Blocks</p>
                <div className="StudentDashboardControlBlocks">
                  <img 
                    className="StudentDashboardControlBlocks" 
                    src="/images/Student Areas/Screen Shot 2020-04-29 at 9.10.19 PM@2x.png" 
                    alt="control_blocks" />
                  <img
                    className="StudentDashboardControlBlocks" 
                    src="/images/Student Areas/Screen Shot 2020-04-25 at 11.30.43 PM@2x.png" 
                    alt="control_block_addition" />
                </div>
              </div>
              <div>
                <p className="StudentDashboardBlockPTag">Motion Blocks</p>
                <div className="StudentDashboardMotionBlocks">
                  <img 
                    className="StudentDashboardMotionBlocks" 
                    src="/images/Student Areas/Screen Shot 2020-04-29 at 9.10.04 PM@2x.png" 
                    alt="motion_blocks" />
                  <img
                    className="StudentDashboardMotionBlocks" 
                    src="/images/Student Areas/Screen Shot 2020-04-25 at 11.30.57 PM@2x.png" 
                    alt="control_motion_addition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
