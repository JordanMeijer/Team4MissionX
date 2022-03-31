import './TeacherDashboard.css';
import React from 'react';
import { useEffect, useState } from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherDashboardStudentProfileCard from '../components/TeacherDashboardStudentProfileCard'

import StudentProfilePicture1 from '../images/Teacher Areas/Ellipse -1.png'
import StudentProfilePicture2 from '../images/Teacher Areas/Ellipse -2.png'
import StudentProfilePicture3 from '../images/Teacher Areas/Ellipse -3.png'
import StudentProfilePicture4 from '../images/Teacher Areas/Ellipse -4.png'
import StudentProfilePicture5 from '../images/Teacher Areas/Ellipse -5.png'
import StudentProfilePicture6 from '../images/Teacher Areas/Ellipse -6.png'
import StudentProfilePicture7 from '../images/Teacher Areas/Ellipse -7.png'
import StudentProfilePicture8 from '../images/Teacher Areas/Ellipse -8.png'
import StudentProfilePicture9 from '../images/Teacher Areas/Ellipse -9.png'
import StudentProfilePicture10 from '../images/Teacher Areas/Ellipse -10.png'
import StudentProfilePicture11 from '../images/Teacher Areas/Ellipse -11.png'
import StudentProfilePicture12 from '../images/Teacher Areas/Ellipse -12.png'
import StudentProfilePicture13 from '../images/Teacher Areas/Ellipse -13.png'
import StudentProfilePicture14 from '../images/Teacher Areas/Ellipse -14.png'
import StudentProfilePicture15 from '../images/Teacher Areas/Ellipse -15.png'
// import StudentProfiles from '../StudentProfiles'; 


export default function TeacherDashboardStudentProfiles() { 
    
    const [StudentProfiles, setStudentProfiles] = useState([{name:"name", studentProfilePicture:"picture"}])

    const getStudentProfiles = () => {
        fetch('http://localhost:5000')
        .then((res) => res.json())
        .then((StudentProfileData) => {
        console.log(StudentProfileData);
        const StudentProfiles = StudentProfileData;
        setStudentProfiles(StudentProfiles)
        })

    }
    useEffect(() => getStudentProfiles(),[])

    // fetch('http://localhost:5000')
    //  .then((res) => res.json())
    //  .then((jsonData) => {
    //  console.log(jsonData);
    //  }
    // getStudentProfiles()

    const studentProfileCards = StudentProfiles.map(studentProfiles => {
        return (
            <TeacherDashboardStudentProfileCard key={studentProfiles} studentProfilePicture={studentProfiles.ProfilePic} name={studentProfiles.Name}/>
        )
    })
  return (
    <div>
        <div>
            <StudentTeacherHeader />
        </div>
        <div className='Dashboard'> 
            <SideBar page="/teacherdashboard/studentprofiles" TeacherVersion={true}/> 
            <div className='DashboardContentsParentContainer'>
                <div className="DashboardContentsChildContainer">
                    <div className="StudentProfilesGrid">
                        {studentProfileCards}
                    </div>
              
                </div>
            </div>
        </div>
    </div>
)}