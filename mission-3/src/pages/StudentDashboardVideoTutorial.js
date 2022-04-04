import React from "react";
import './TeacherDashboard.css';
import './StudentDashboardTutorial.css';
import SideBar from "../components/SideBar";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

function StudentDashboardVideoTutorial () {
  return (
    <>
      <StudentTeacherHeader render_project_bar={true} text_middle="Ask Teacher for Help" />
      <div className='Dashboard'>
        <SideBar page="/studentdashboard/videotutorial" TeacherVersion={false} />
        <div className='DashboardContentsParentContainer'>
          <div className='DashboardContentsChildContainer'>
            <div className="StudentDashboardTutorialImages">
              <div className="StudentDashboardTutorialCircle">
                <img src="/images/Student Areas/asset1.png" alt="asset_1"/>
              </div>
              <img src="/images/Student Areas/Screen Shot 2020-04-25 at 11.16.17 PM.png" alt="scratch_overview" />
              <div className="StudentDashboardTutorialCircle">
                <img src="/images/Student Areas/asset2.png" alt="asset_2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardVideoTutorial;