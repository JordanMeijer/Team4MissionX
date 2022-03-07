import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import LogInSignUp from './pages/LogInSignUp'
import Profile from './pages/Profile'
import StudentProjectBuilder from './pages/StudentProjectBuilder'
import StudentProjectLibrary from './pages/StudentsProjectLibrary'
import TeacherDashboard from './pages/TeacherDashboard'
import TeacherProjectBuilder from './pages/TeacherProjectBuilder'
import TeacherProjectLibrary from './pages/TeacherProjectLibrary'
import StudentProfiles from './pages/TeacherDashboardStudentProfiles.js'
import HelpRequests from './pages/TeacherDashboardHelpRequest.js'
import ProjectSubmissions from './pages/TeacherDashboardProjectSubmissions.js'

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginsignup" element={<LogInSignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/studentprojectbuilder" element={<StudentProjectBuilder />} />
          <Route path="/studentprojectlibrary" element={<StudentProjectLibrary />} />
          <Route path="/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/teacherprojectbuilder" element={<TeacherProjectBuilder />} />
          <Route path="/teacherprojectlibrary" element={<TeacherProjectLibrary />} />
          <Route path="/teacherdashboard/studentprofiles" element={<StudentProfiles />} />
          <Route path="/teacherdashboard/helprequests" element={<HelpRequests />} />
          <Route path="/teacherdashboard/projectsubmissions" element={<ProjectSubmissions />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
