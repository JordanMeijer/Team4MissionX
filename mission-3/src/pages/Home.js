import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import HomeFooter from "../components/HomeFooter";
import SectionTwo from "../components/SectionTwo";

function Home() {
  return (
    <>
      <HomeHeader render_home={true} />
      <HomeHero />

      <div>
        <h2>This is the Home page</h2>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/studentproject">Student Projects</Link>
      </div>
      <div>
        <Link to="/studentdashboard">Student Dashboard</Link>
      </div>
      <div>
        <Link to="/teacherdashboard/progresstracker">Teacher Dashboard</Link>
      </div>
      <div>
        <Link to="/teacherprojectlibrary">Teacher Project Library</Link>
      </div>
      <SectionTwo />
      <HomeFooter />
    </>
  );
}

export default Home;
