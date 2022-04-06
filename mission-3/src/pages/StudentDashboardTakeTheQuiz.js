import React from "react";
import './TeacherDashboard.css';
import SideBar from "../components/SideBar";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

function StudentDashboardTakeTheQuiz () {
  return (
    <>
      <StudentTeacherHeader render_project_bar={false} text_middle="Ask Teacher for Help" />
      <div className='Dashboard'>
        <SideBar page="/studentdashboard/takethequizz" TeacherVersion={false} />
        <div className='DashboardContentsParentContainer'>
          <div className='DashboardContentsChildContainer'>

          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardTakeTheQuiz;