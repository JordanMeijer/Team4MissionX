import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import HomeOffer from "../components/HomeOffer";
import HomeBottom from "../components/HomeBottom";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <>
      <HomeHeader render_home={true} />
      <HomeHero />
      <HomeOffer />

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
      <HomeBottom />
      <HomeFooter />
    </>
  );
}

export default Home;
