import './TeacherDashboard.css';
import React from 'react';
import { useEffect, useState } from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherDashboardStudentProfileCard from '../components/TeacherDashboardStudentProfileCard'


// Old imports from before grabing the pictures from the backend
// import StudentProfilePicture1 from '../images/Teacher Areas/Ellipse -1.png'
// import StudentProfilePicture2 from '../images/Teacher Areas/Ellipse -2.png'
// import StudentProfilePicture3 from '../images/Teacher Areas/Ellipse -3.png'
// import StudentProfilePicture4 from '../images/Teacher Areas/Ellipse -4.png'
// import StudentProfilePicture5 from '../images/Teacher Areas/Ellipse -5.png'
// import StudentProfilePicture6 from '../images/Teacher Areas/Ellipse -6.png'
// import StudentProfilePicture7 from '../images/Teacher Areas/Ellipse -7.png'
// import StudentProfilePicture8 from '../images/Teacher Areas/Ellipse -8.png'
// import StudentProfilePicture9 from '../images/Teacher Areas/Ellipse -9.png'
// import StudentProfilePicture10 from '../images/Teacher Areas/Ellipse -10.png'
// import StudentProfilePicture11 from '../images/Teacher Areas/Ellipse -11.png'
// import StudentProfilePicture12 from '../images/Teacher Areas/Ellipse -12.png'
// import StudentProfilePicture13 from '../images/Teacher Areas/Ellipse -13.png'
// import StudentProfilePicture14 from '../images/Teacher Areas/Ellipse -14.png'
// import StudentProfilePicture15 from '../images/Teacher Areas/Ellipse -15.png'
// import StudentProfiles from '../StudentProfiles'; 


export default function TeacherDashboardStudentProfiles() { 
    

    
    const [StudentProfiles, setStudentProfiles] = useState([{name:"name", studentProfilePicture:"picture"}])


    // This is getting the general student profile, will need to make it a specific request the just gets the name and pics
    const getStudentProfiles = () => {
        fetch('http://localhost:5000')
        .then((res) => res.json())
        .then((StudentProfileData) => {
        console.log(StudentProfileData);
        const StudentProfiles = StudentProfileData;
        setStudentProfiles(StudentProfiles)
        })
    }

    // The final lot of brackets makes sure it only fetches once.
    useEffect(() => getStudentProfiles(),[])

    // fetch('http://localhost:5000')
    //  .then((res) => res.json())
    //  .then((jsonData) => {
    //  console.log(jsonData);
    //  }
    // getStudentProfiles()


    // Intially makes just one profile card based upon default state of student profiles, after it fetches, it populates all the grabbed profiles
    const studentProfileCards = StudentProfiles.map(studentProfiles => {
        return (
            <TeacherDashboardStudentProfileCard key={studentProfiles} studentProfilePicture={studentProfiles.ProfilePic} name={studentProfiles.Name}/>
        )
    })
  return (
    <div>
        <div>
            <StudentTeacherHeader render_project_bar={false} text_middle="Help Centre" />
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