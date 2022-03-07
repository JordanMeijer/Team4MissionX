import '../App.css';
import './Header.css';
import React from 'react';
import NavBar from './NavBar';
import Languages from './Languages';
import levelup from '../images/Home/levelup_brand.png';
import ProjectBar from './ProjectBar';

function Header () {
  return (
    <div className="header">
      <section id="brand">
        <img src={levelup} alt="project" />
      </section>
      <section id="project_intro">
        <div >PROJECT Introduction</div>
      </section>
      <section>
        <ProjectBar circles="1" number="1"/>
      </section>
      <section>
        <ProjectBar circles="14" number="" />
      </section>
      <section>
        <NavBar />
      </section>
      <section>
        <Languages />
      </section>
    </div>
  );
};

export default Header;