import React, { useState, useEffect } from "react";
import "./StudentProject.css";
import HomeHeader from "../components/HomeHeader";


function StudentProject() {
  const [studentID, setStudentID] = useState(2);
  const [pathPicture, setPathPicture] = useState('');
  const [studentName, setStudentName] = useState('');
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
        const localData = StudentProfileData;
        setStudentData(localData);
        setPathPicture(localData.map(key => key.ProfilePic));
        setStudentName(localData.map(key => key.StudentName.toUpperCase()));
      })
  }
  
  useEffect(() => getStudentProfiles(), [])

  return (
    <>
      <HomeHeader picture_path={pathPicture} person_name={studentName}/>
      <h1 className="StudentProjectH1Tag">PROJECTS</h1>
      <h3 className="StudentProjectH3Tag">Welcome to the project library. You can use the filters on the right to help you 
          search for specific projects.</h3>
    </>
  );
};

export default StudentProject;