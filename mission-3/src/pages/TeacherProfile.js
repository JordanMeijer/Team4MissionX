import "./TeacherProfile.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomeHeader from "../components/HomeHeader";

export default function StudentProfile() {
  const { state } = useLocation();
  const [teacherID, setTeacherID] = useState(0);
  const [teacherData, setTeacherData] = useState([{
    Name: 'name',
    Email: 'email',
    School: 'School',
    ProfilePic: 'ProfilePic',
    DateOfBirth: '0',
    ContactNumber: '0'
  }]); 

  const getTeacherProfiles = () => {
    fetch(`http://localhost:4000/teacherprofile/${teacherID}`)
      .then((res) => res.json())
      .then((TeacherProfileData) => {
        const teacherData = TeacherProfileData;
        setTeacherData(teacherData);
      })
  }
  
  useEffect(() => getTeacherProfiles(), [])

  return (
    <>
      <HomeHeader picture_path={teacherData.map(key => key.ProfilePic)} person_name={teacherData.map(key => key.Name.toUpperCase())}/>
      <div className="teacherprofile_body">
        <div className="teacherprofile_settings_background">
          <div className="teacherprofile_settings">
            <img className="teacherprofile_photo" src={teacherData.map(key => key.ProfilePic)} alt="teacher_photo"/>
            <button className="teacherprofile_photo_buttons">EDIT PROFILE</button>
            <button className="teacherprofile_photo_buttons">CHANGE PHOTO</button>
            <button className="teacherprofile_photo_buttons">SETTINGS</button>
          </div>
        </div>
        <div className="teacherprofile_right_side">
          <div className="teacherprofile_data">
            <div>
              <h2 className="teacherprofile_person_name">{teacherData.map(key => key.Name)}</h2>
            </div>
            <div className="teacherprofile_person_details">
              <div>
                <h3 className="teacherprofile_detail_subject">School</h3>
                <h3 className="teacherprofile_detail_subject">Courses Purchased</h3>
                <h3 className="teacherprofile_detail_subject">Date of Birth</h3>
                <h3 className="teacherprofile_detail_subject">Contact No</h3>
                <h3 className="teacherprofile_detail_subject">Email Address</h3>
              </div>
              <div>
                <h3 className="teacherprofile_detail_subject">{teacherData.map(key => key.School)}</h3>
                <h3 className="teacherprofile_detail_subject">Beginner</h3>
                <h3 className="teacherprofile_detail_subject">{teacherData.map(key => key.DateOfBirth)}</h3>
                <h3 className="teacherprofile_detail_subject">{teacherData.map(key => key.ContactNumber)}</h3>
                <h3 className="teacherprofile_detail_subject">{teacherData.map(key => key.Email)}</h3>
              </div>
            </div>
          </div>
          <div className="teacherprofile_buttons">
            <button 
              className="teacherprofile_back_button" 
              onClick={()=> window.location.href="http://localhost:3000"}> BACK TO PROJECTS
            </button>
            <button 
              className="teacherprofile_back_dashboard_button" 
              onClick={()=> window.location.href="http://localhost:3000/teacherdashboard/progresstracker"}> BACK TO DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}