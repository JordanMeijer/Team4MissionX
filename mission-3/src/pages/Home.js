import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  return (
    <div style={{background: backgroundColor}}>

      <div><h2>This is the Home page</h2></div>
      <div>
        <Link to="/loginsignup">Log In / Sign Up</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/studentprojectbuilder" onClick={() => setBackgroundColor("#B2E4FA")}>Student Project Builder</Link>
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
    </div>
  );
}

export default Home;