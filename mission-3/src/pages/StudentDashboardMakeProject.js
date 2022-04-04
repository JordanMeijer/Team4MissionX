import React from "react";
import './TeacherDashboard.css';
import './StudentDashboardMakeProject.css';
import SideBar from "../components/SideBar";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

function StudentDashboardMakeProject () {
  return (
    <>
      <StudentTeacherHeader render_project_bar={true} text_middle="Ask Teacher for Help" />
      <div className='Dashboard'>
        <SideBar page="/studentdashboard/makeproject" TeacherVersion={false} />
        <div className='DashboardContentsParentContainer'>
          <div className='DashboardContentsChildContainer'>
            <img
              className="StudentDashboardMakeProjectImages" 
              src="/images/Student Areas/Screen Shot -1.png" 
              alt="make_project" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardMakeProject;