import React from "react";
import './TeacherDashboard.css';
import './StudentDashboardInstructions.css';
import SideBar from "../components/SideBar";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

function StudentDashboardInstructions () {
  return (
    <>
      <StudentTeacherHeader render_project_bar={true} text_middle="Ask Teacher for Help" />
      <div className='Dashboard'>
        <SideBar page="/studentdashboard/instructions" TeacherVersion={false} />
        <div className='DashboardContentsParentContainer'>
          <div className='DashboardContentsChildContainer'>
            <h1 className="StudentDashboardInstructionsH1Tag">1. JOIN SCRATCH</h1>
            <p className="StudentDashboardInstructionsPTag">If you haven’t used Scratch before, you will need to join Scratch first.</p>
            <p className="StudentDashboardInstructionsPTag">Go to https://scratch.mit.edu. 
              <span className="StudentDashboardInstructionsSpanTag"> Click on Join Scratch.</span></p>
            <img className="StudentDashboardInstructionsImageTag" src="/images/Student Areas/Screen Shot 2020-04-25 at 9.10.36 PM.png" alt="join_scratch" />
            <p className="StudentDashboardInstructionsPTag">Follow the instructions to join. You will need a username and a password that 
              you will remember. If possible, you should also verify your email address so that
              you can Share projects later. Ask your teacher to help with this step if you don’t 
              have an email address, or if you are not sure what to do.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardInstructions;