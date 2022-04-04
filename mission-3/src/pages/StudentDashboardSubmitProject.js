import React from "react";
import './TeacherDashboard.css';
import './StudentDashboardSubmitProject.css';
import SideBar from "../components/SideBar";
import StudentTeacherHeader from "../components/StudentTeacherHeader";

function StudentDashboardSubmitProject () {
  return (
    <>
      <StudentTeacherHeader render_project_bar={true} text_middle="Ask Teacher for Help" />
      <div className='Dashboard'>
        <SideBar page="/studentdashboard/submitproject" TeacherVersion={false} />
        <div className='DashboardContentsParentContainer'>
          <div className='DashboardContentsChildContainer'>
            <div className="StudentDashboardSubmitSectionTag">
              <section>
                <img src="/images/Student Areas/Screen Shot 2020-04-25 at 9.05.35 PM.png" alt="submit" />
                <h3 className="StudentDashboardSubmitH3Tag">Submit project photo</h3>
                <p className="StudentDashboardSubmitPTag">After completing your project, take a screenshot of your project and upload it here.
                  <br></br>
                </p>
                <div className="StudentDashboardSubmitButton">
                  <img 
                    className="StudentDashboardSubmitButtonImage"
                    src="/images/Student Areas/Icon material-photo.png" 
                    alt="send_photo" />
                  <p>Send Photo</p>
                </div>
              </section>
              <section>
                <img src="/images/Student Areas/annie-spratt-VFupoYdEYNs-unsplash.png" alt="show_teacher" />
                <h3 className="StudentDashboardSubmitH3Tag">Show your teacher</h3>
                <p className="StudentDashboardSubmitPTag" >
                  <br></br>If your teacher is in the same room as you, click the button below
                  <br></br>to let them know you are done.
                </p>
                <div className="StudentDashboardSubmitButton">
                  <img 
                    className="StudentDashboardSubmitButtonImage"
                    src="/images/Student Areas/Icon awesome-chalkboard-teacher.png" 
                    alt="call_teacher" />
                  <p>Call Teacher</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboardSubmitProject;