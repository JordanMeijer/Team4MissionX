import "./Profile.css";
import { useState, useEffect } from 'react';
import HomeHeader from "../components/HomeHeader";

export default function Profile() {
  const [studentID, setStudentID] = useState(2);
  const [studentData, setStudentData] = useState([{
    StudentName: 'student',
    Email: 'email',
    School: 'School',
    ProfilePic: 'ProfilePic',
    TeacherName: 'teacher',
    DateOfBirth: '0',
    ContactNumber: '0'
  }]); 

  const getStudentProfiles = () => {
    fetch(`http://localhost:4000/studentprofile/${studentID}`)
      .then((res) => res.json())
      .then((StudentProfileData) => {
        const studentData = StudentProfileData;
        setStudentData(studentData);
      })
  }
  
  useEffect(() => getStudentProfiles(), [])

  return (
    <>
      <HomeHeader picture_path={studentData.map(key => key.ProfilePic)} person_name={studentData.map(key => key.StudentName.toUpperCase())}/>
      <div className="profile_body">
        <div className="profile_settings_background">
          <div className="profile_settings">
            <img className="profile_photo" src={studentData.map(key => key.ProfilePic)} alt="student_photo"/>
            <button className="profile_photo_buttons">EDIT PROFILE</button>
            <button className="profile_photo_buttons">CHANGE PHOTO</button>
          </div>
        </div>
        <div className="profile_right_side">
          <div className="profile_data">
            <div>
              <h2 className="profile_person_name">{studentData.map(key => key.StudentName)}</h2>
            </div>
            <div className="profile_person_details">
              <div>
                <h3 className="profile_detail_subject">School</h3>
                <h3 className="profile_detail_subject">Teacher</h3>
                <h3 className="profile_detail_subject">Course</h3>
                <h3 className="profile_detail_subject">Date of Birth</h3>
                <h3 className="profile_detail_subject">Contact No</h3>
                <h3 className="profile_detail_subject">Email Address</h3>
              </div>
              <div>
                <h3 className="profile_detail_data">{studentData.map(key => key.School)}</h3>
                <h3 className="profile_detail_data">{studentData.map(key => key.Name)}</h3>
                <h3 className="profile_detail_data">Beginner</h3>
                <h3 className="profile_detail_data">{studentData.map(key => key.DateOfBirth)}</h3>
                <h3 className="profile_detail_data">{studentData.map(key => key.ContactNumber)}</h3>
                <h3 className="profile_detail_data">{studentData.map(key => key.Email)}</h3>
              </div>
            </div>
          </div>
          <button className="profile_back_button">BACK TO PROJECTS</button>
        </div>
      </div>
    </>
  );
}
