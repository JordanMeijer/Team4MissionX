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

function App() {
  return (
    <div className="App">
      <div>
        wasd
      </div>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
