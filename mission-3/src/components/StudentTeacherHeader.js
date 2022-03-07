import React from 'react';

import '../App.css';
import './StudentTeacherHeader.css';

import Languages from './Languages';
import StudentTeacherNavBar from './StudentTeacherNavBar';
import ProjectBar from './ProjectBar';
import StarLogo07_3 from '../images/Home/Star Logo 07-3.png';


function StudentTeacherHeader () {
  return (
    <div className="student_teacher_header">
      <section>
        <img src={StarLogo07_3} className="star_logo_07_3" alt="project" />
      </section>
      <section>
        <div id="project">PROJECT</div>
        <div id="introduction">Introduction</div>
      </section>
      <section>
        <ProjectBar circles="1" number="1"/>
      </section>
      <section>
        <ProjectBar circles="14" number="" />
      </section>
      <section>
        <StudentTeacherNavBar />
      </section>
      <section>
        <Languages />
      </section>
    </div>
  );
};

export default StudentTeacherHeader;