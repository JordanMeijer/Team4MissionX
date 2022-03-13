import React from 'react';

import '../App.css';
import './StudentTeacherHeader.css';

import Languages from './Languages';
import StudentTeacherNavBar from './StudentTeacherNavBar';
import ProjectBar from './ProjectBar';
import StarLogo07_3 from '../images/Home/Star Logo 07-3.png';


function StudentTeacherHeader (props) {
  return (
    <>
      <header className="student_teacher_header">
        <section>
          <img src={StarLogo07_3} className="star_logo_07_3" alt="project" />
        </section>
        <section>
          <ProjectBar render_bar={props.render_project_bar} circles={15} number_to_render={1}/>
        </section>
        <section>
          <StudentTeacherNavBar text_navbar_left="Take Screenshot" text_navbar_mid={props.text_middle} text_navbar_right="More Projects"/>
        </section>
        <section>
          <Languages />
        </section>
      </header>
    </>
  );
};

export default StudentTeacherHeader;