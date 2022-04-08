import './TeacherDashboard.css';
import React from 'react';
import { useEffect, useState } from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherDashboardStudentProfileCard from '../components/TeacherDashboardStudentProfileCard'


export default function TeacherDashboardStudentProfiles() {
  const [StudentProfiles, setStudentProfiles] = useState([{ name: "name", studentProfilePicture: "picture" }])

  const getStudentProfiles = () => {
    fetch('http://localhost:4000/teacherdashboard/studentprofiles')
      .then((res) => res.json())
      .then((StudentProfileData) => {
        console.log(StudentProfileData);
        const StudentProfiles = StudentProfileData;
        setStudentProfiles(StudentProfiles)
      })
  }

  useEffect(() => getStudentProfiles(), [])



  const studentProfileCards = StudentProfiles.map(studentProfiles => {
    return (
      <TeacherDashboardStudentProfileCard
        key={studentProfiles}
        studentProfilePicture={studentProfiles.ProfilePic}
        name={studentProfiles.StudentName} />
    )
  })

  return (
    <div>
      <div>
        <StudentTeacherHeader render_project_bar={false} text_middle="Help Centre" />
      </div>
      <div className='Dashboard'>
        <SideBar page="/teacherdashboard/studentprofiles" TeacherVersion={true} />
        <div className='DashboardContentsParentContainer'>
          <div className="DashboardContentsChildContainer">
            <div className='DashboardContents'>
              <div className="StudentProfilesGrid">

                {studentProfileCards}

              </div>
              <div className='ScrollBarParent'>
                <div className='ScrollBarChild'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}