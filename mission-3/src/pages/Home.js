import { Link } from 'react-router-dom';
import HomeHeader from "../components/HomeHeader";
import HomeHero from '../components/HomeHero';
import HomeFooter from '../components/HomeFooter';

function Home() {

  return (
    <>
      <HomeHeader />
      <HomeHero />
      <div>
        <Link to="/loginsignup">Log In / Sign Up</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/studentprojectbuilder">Student Project Builder</Link>
      </div>
      <div>
        <Link to="/studentprojectlibrary">Student Project Library</Link>
      </div>
      <div>
        <Link to='/teacherdashboard'>Teacher Dashboard</Link>
      </div>
      <div>
        <Link to="/teacherprojectbuilder">Teacher Project Builder</Link>      
      </div>
      <div>
        <Link to="/teacherprojectlibrary">Teacher Project Library</Link>
      </div>
      <HomeFooter />
    </>
  );
}

export default Home;