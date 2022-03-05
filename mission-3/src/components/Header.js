import '../App.css';
import React from 'react';
import NavBar from './NavBar';
import Languages from './Languages';
import star_logo_03 from '../images/Home/Star Logo 07-2@2x.png';

function Header () {
  return (
    <div className="header">
      <img src={star_logo_03} alt="project" />
      <NavBar />
      <Languages />
    </div>
  );
};

export default Header;